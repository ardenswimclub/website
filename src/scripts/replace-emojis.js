// scripts/replace-emojis.js
import fs from 'fs/promises';
import path from 'path';
import twemoji from 'twemoji';

const distDir = './dist';

async function processFile(filePath) {
  let content = await fs.readFile(filePath, 'utf-8');

  // Replace emojis using Twemoji
  const parsed = twemoji.parse(content, {
    folder: 'svg',
    ext: '.svg',
    base: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/',
  });

  await fs.writeFile(filePath, parsed, 'utf-8');
  console.log(`✅ Processed ${filePath}`);
}

async function walkDir(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walkDir(fullPath);
    } else if (entry.name.endsWith('.html')) {
      await processFile(fullPath);
    }
  }
}

await walkDir(distDir);
console.log('🌈 Emoji replacement complete!');
