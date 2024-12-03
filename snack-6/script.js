const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.
const zucchineLunghe = []
const zucchineCorte = []
zucchine.forEach(zucchina => (zucchina.length >= 15 ? zucchineLunghe : zucchineCorte).push(zucchina))
console.log(zucchineCorte)
console.log(zucchineLunghe)

// Con metodo filter
const zucchineLungheFilter = zucchine.filter(({ length }) => length >= 15)
const zucchineCorteFilter = zucchine.filter(({ length }) => length < 15)
console.log(zucchineCorteFilter)
console.log(zucchineLungheFilter)