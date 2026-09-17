// Checks every messages/<locale>.json (other than en.json) against en.json:
// same key set, and each string carries the same rich text tags and ICU
// parameters as its English original. Exits non-zero on any mismatch.
//
// Also reports scaffolding markers ("[ES] " and the like) in any locale file.
// A warning by default, so previews and local builds work mid-translation.
// With --no-markers a marker is a failure: package.json runs that form as
// prebuild on production deploys, so a marker can never ship.
//
//   npm run i18n:check
//   node scripts/check-messages.mjs --no-markers

import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const messagesDir = path.join(rootDir, 'messages');
const enPath = path.join(messagesDir, 'en.json');
const en = JSON.parse(readFileSync(enPath, 'utf8'));

const locales = readdirSync(messagesDir)
  .filter((file) => file.endsWith('.json') && file !== 'en.json')
  .map((file) => file.replace(/\.json$/, ''));

function flatten(value, prefix = '') {
  if (typeof value === 'string') {
    return { [prefix]: value };
  }
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return Object.entries(value).reduce(
      (acc, [key, v]) => Object.assign(acc, flatten(v, prefix ? `${prefix}.${key}` : key)),
      {}
    );
  }
  throw new Error(`Unsupported message value at "${prefix}": ${JSON.stringify(value)}`);
}

function tokens(str) {
  const tags = [...str.matchAll(/<\/?(\w+)>/g)].map((m) => m[0]);
  const params = [...str.matchAll(/\{(\w+)\}/g)].map((m) => m[0]);
  return [...tags, ...params].sort();
}

const failOnMarkers = process.argv.includes('--no-markers');
const MARKER = /^\[[A-Z]{2}\] /;

const enFlat = flatten(en);
const enKeys = new Set(Object.keys(enFlat));
let ok = true;
const markers = [];

for (const [key, value] of Object.entries(enFlat)) {
  if (MARKER.test(value)) markers.push(`en.json: ${key}`);
}

for (const locale of locales) {
  const localePath = path.join(messagesDir, `${locale}.json`);
  const data = JSON.parse(readFileSync(localePath, 'utf8'));
  const localeFlat = flatten(data);
  const localeKeys = new Set(Object.keys(localeFlat));

  for (const [key, value] of Object.entries(localeFlat)) {
    if (MARKER.test(value)) markers.push(`${locale}.json: ${key}`);
  }

  for (const key of enKeys) {
    if (!localeKeys.has(key)) {
      console.error(`${locale}.json: missing key "${key}"`);
      ok = false;
    }
  }
  for (const key of localeKeys) {
    if (!enKeys.has(key)) {
      console.error(`${locale}.json: extra key "${key}" not in en.json`);
      ok = false;
    }
  }

  for (const key of enKeys) {
    if (!localeKeys.has(key)) continue;
    const enTokens = tokens(enFlat[key]).join(',');
    const localeTokens = tokens(localeFlat[key]).join(',');
    if (enTokens !== localeTokens) {
      console.error(
        `${locale}.json: "${key}" tags/params mismatch — en has [${enTokens}], ${locale} has [${localeTokens}]`
      );
      ok = false;
    }
  }
}

if (markers.length > 0) {
  const label = failOnMarkers ? 'error' : 'warning';
  console[failOnMarkers ? 'error' : 'warn'](
    `${label}: ${markers.length} untranslated marker${markers.length === 1 ? '' : 's'}:`
  );
  for (const entry of markers) {
    console[failOnMarkers ? 'error' : 'warn'](`  ${entry}`);
  }
  if (failOnMarkers) ok = false;
}

if (!ok) {
  process.exit(1);
}

console.log(
  locales.length > 0
    ? `${locales.join(', ')} match en.json: key parity and tag/param parity OK.`
    : 'No locale files to check.'
);
