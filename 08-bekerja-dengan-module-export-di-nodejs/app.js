// object rumus
// const rumus = require("./rumus");

// destructuring atau destructor
const {penjumlahan, PHI, luas, keliling} = require("./rumus");

// menggunakan function penjumlahan dari file rumus
console.info(penjumlahan(1, 2));

// konstan PHI
console.info(PHI);

// menghitung luas
console.info(luas(9, 5));

// keliling
console.info(keliling(9));