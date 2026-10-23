import fs from "fs";
import sharp from "sharp";

const logoSrc =
  "C:/Users/Ahmad Raza/.cursor/projects/g-involiq-projects-sales-geek/assets/c__Users_Ahmad_Raza_AppData_Roaming_Cursor_User_workspaceStorage_4b2f2438f0b4a170724af5d99e01b00a_images_sales_geek_logo-e67fe8a0-c3b7-4014-9b86-43e7e3c2fa58.jpg";
const sigSrc =
  "C:/Users/Ahmad Raza/.cursor/projects/g-involiq-projects-sales-geek/assets/richard-few-signature.jpg";

async function removeNearBlack(src) {
  const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const thr = 28;
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r < thr && g < thr && b < thr) data[i + 3] = 0;
  }
  return sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .trim({ threshold: 5 })
    .png()
    .toBuffer();
}

async function toInk(pngBuf) {
  const { data, info } = await sharp(pngBuf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] < 10) continue;
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const isYellow = r > 180 && g > 140 && b < 120;
    if (!isYellow) {
      data[i] = 17;
      data[i + 1] = 17;
      data[i + 2] = 17;
    }
  }
  return sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } }).png().toBuffer();
}

async function removeNearWhite(src) {
  const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r > 235 && g > 235 && b > 235) data[i + 3] = 0;
  }
  return sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .trim({ threshold: 10 })
    .png()
    .toBuffer();
}

async function main() {
  fs.mkdirSync("src/assets", { recursive: true });
  fs.mkdirSync("public", { recursive: true });

  const full = await removeNearBlack(logoSrc);
  fs.writeFileSync("src/assets/logo.png", full);
  const meta = await sharp(full).metadata();
  console.log("logo", meta.width, meta.height);

  const favH = Math.round(meta.height * 0.52);
  const glasses = await sharp(full)
    .extract({ left: 0, top: 0, width: meta.width, height: Math.min(favH, meta.height) })
    .trim({ threshold: 5 })
    .resize(256, 256, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  fs.writeFileSync("public/favicon.png", glasses);
  fs.writeFileSync("public/favicon-32.png", await sharp(glasses).resize(32, 32).png().toBuffer());
  fs.writeFileSync(
    "public/apple-touch-icon.png",
    await sharp(glasses).flatten({ background: "#111111" }).resize(180, 180).png().toBuffer(),
  );
  // PNG-in-ICO style: browsers accept PNG named .ico in modern setups; also keep png
  fs.writeFileSync("public/favicon.ico", await sharp(glasses).resize(48, 48).png().toBuffer());

  fs.writeFileSync("src/assets/logo-ink.png", await toInk(full));

  const sig = await removeNearWhite(sigSrc);
  fs.writeFileSync("src/assets/richard-few-signature.png", sig);
  console.log("signature", (await sharp(sig).metadata()).width);
  console.log("done");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
