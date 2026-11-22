// A small domestic moment, held still: water poured, vapour curling upward.
// The ease lives inside the picture; nothing here orders the reader to unwind.
// Short, soft, everyday language, and one picture the mind can keep.
// Nothing pushes; the scene itself does the settling.
import fs from 'node:fs';

const text = 'The kettle has just boiled. You pour the water slowly, and the steam rises in one thin, unhurried line. Nothing else needs you right now.';

fs.mkdirSync('/output', { recursive: true });
fs.writeFileSync('/output/entry.txt', text, 'utf8');
