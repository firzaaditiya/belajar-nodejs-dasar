// function penjumlahan
const penjumlahan = (a, b) => a + b;

// module.exports.penjumlahan = (a, b) => a + b;

// const PHI
const PHI = 3.14;

// module.exports.PHI = 3.14;

// function menghitung luas
const luas = (p ,l) => p * l;

// module.exports.luas = (p ,l) => p * l;

// function menghitung keliling
const keliling = (jari) => 2 * PHI * jari;

// module.exports.keliling = (jari) => 2 * 3.14 * jari;

const math = {
    penjumlahan,
    PHI,
    luas,
    keliling
};

// export semua isi dari object variable "math"
module.exports = math;

/*
    ini adalah object bawaan nodejs diamana kita akan menambahkan function/variable yang akan diregis ke module, atau mana
    yang akan bisa kita gunakan didalam file javascript luar menggunakan export
*/
// module.exports.penjumlahan = penjumlahan;
// module.exports.PHI = PHI;
// module.exports.luas = luas;
// module.exports.keliling = keliling;
