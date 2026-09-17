import assert from 'node:assert/strict';
import { readFile, access, readdir } from 'node:fs/promises';
import path from 'node:path';
import { build, dist } from './build.mjs';

await build();
const home = await readFile(path.join(dist, 'index.html'), 'utf8');
const lead = await readFile(path.join(dist, 'hablemos', 'index.html'), 'utf8');

for (const [name, html] of [['inicio', home], ['hablemos', lead]]) {
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length, `${name}: IDs únicos`);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${name}: un h1`);
  for (const match of html.matchAll(/href="#([^"]+)"/g)) {
    assert(ids.includes(match[1]), `${name}: ancla ${match[1]}`);
  }
}

assert.equal((home.match(/href="\/hablemos\/"/g) || []).length, 3, 'Tres botones Hablemos enlazan la landing');
assert(lead.includes('data-form-id="4ce2d475-ba60-4534-bda0-ad4deaaaea41"'));
assert(lead.includes('data-portal-id="52036222"'));
assert(lead.includes('pesos mexicanos'));
assert(lead.includes('1–2 días hábiles'));
for (const file of ['styles.css', 'lead.css', 'main.js', 'images/v2-hero-portrait.jpg', 'images/og-adri-v2.png']) {
  await access(path.join(dist, file));
}
for (const file of await readdir(path.join(dist, 'fonts'))) {
  if (!file.endsWith('.woff2')) continue;
  const data = await readFile(path.join(dist, 'fonts', file));
  assert.equal(data.subarray(0, 4).toString(), 'wOF2', `Fuente válida: ${file}`);
}
console.log('OK: sitio vigente preservado, landing enlazada, formulario HubSpot y recursos verificados.');
