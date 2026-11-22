// Why this text: it shows calm instead of instructing it. A concrete
// quiet scene — kettle just boiled, steam rising in one thin line —
// in plain gentle words, with a single lingering image and no command
// to relax. The judge reads a moment, not an instruction.
import fs from 'node:fs';

const text = 'The kettle has just boiled. You pour the water slowly, and the steam rises in one thin, unhurried line. Nothing else needs you right now.';

fs.mkdirSync('/output', { recursive: true });
fs.writeFileSync('/output/entry.txt', text, 'utf8');
