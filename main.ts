import fs from 'node:fs';

const text = 'The kettle has just boiled. You pour the water slowly, and the steam rises in one thin, unhurried line. Nothing else needs you right now.';

fs.mkdirSync('/output', { recursive: true });
fs.writeFileSync('/output/entry.txt', text, 'utf8');
