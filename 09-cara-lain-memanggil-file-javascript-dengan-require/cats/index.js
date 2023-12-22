/*
    file index ini berfungsi untuk sebagai file utama dari file file lain, dan pada file ini berisikan require dari file file
    yang lain agar dijadikan satu
*/

// file file yang di require
const embul = require("./embul");
const flash = require("./flash");
const marry = require("./marry");
const mio = require("./mio");

// dikumpulkan dalam 1 variabe array
const cats = [embul, flash, marry, mio];

// console.info(cats);

// export module cats, ada bisa digunakan atau di require di file lain
module.exports = cats;