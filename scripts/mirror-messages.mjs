// Overwrites messages/es.json with an "[ES] "-prefixed mirror of messages/en.json.
// Once real Spanish copy exists, stop running this: it will clobber it.

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const enPath = path.join(rootDir, 'messages', 'en.json');
const esPath = path.join(rootDir, 'messages', 'es.json');

function mirror(value) {
  if (typeof value === 'string') {
    return `[ES] ${value}`;
  }
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return Object.fromEntries(
      Object.entries(value).map(([key, v]) => [key, mirror(v)])
    );
  }
  throw new Error(`Unsupported message value at mirroring: ${JSON.stringify(value)}`);
}

const en = JSON.parse(readFileSync(enPath, 'utf8'));
const es = mirror(en);

writeFileSync(esPath, `${JSON.stringify(es, null, 2)}\n`);

console.log(`Wrote ${esPath}`);
