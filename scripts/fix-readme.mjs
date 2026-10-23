import fs from "fs";

const content = `# Sales Geek

Multi-page marketing site for Sales Geek: sales consultancy, training, Academy and franchise.

## Development

Requires Node.js 20+.

\`\`\`sh
npm i
npm run dev
\`\`\`

## Scripts

- \`npm run dev\` - local development server
- \`npm run build\` - production build
- \`npm run preview\` - preview the production build
- \`npm run test\` - run unit tests
- \`npm run lint\` - lint the project

## Stack

- TanStack Start
- TypeScript
- React
- Tailwind CSS
`;

fs.writeFileSync("README.md", content, "utf8");
console.log("README.md written", Buffer.byteLength(content));
