/*
    kita bisa melihat object object apa saja yang sudah ada pada nodejs atau biasa disebut bawaan, kita bisa membaca atau
    melihat contoh penggunaan dan kode nya melalui web resmi

    https://nodejs.org/en/docs
    https://nodejs.org/dist/latest-v20.x/docs/api/process.html

    didalam nodejs contoh nya ada object "process" yang dimana isinya cukup banyak berbagai informasi mulai dari nodejs juga
    sampai tentang sistem operasi, directory

    process.version : ini untuk melihat versi nodejs kita
    process.release : melihat informasi release
    process.cwd() : mendapatkan directory saat ini (current work directory)
    process.argv : ini mendapatkan informasi kode saat ini dijalankan oleh program apa saja
*/

// akan menampilkan program yang sedang dieksekusi beserta file yang dieksekusi
// console.table(process.argv);

/*
    https://nodejs.org/dist/latest-v20.x/docs/api/process.html#processargv

    kita juga bisa mendapatkan sebuah argument pada command ketika kita menjalankan suatu file dengan nodejs

    command : node app.js chicken gajah capibara

    maka argument yang ketik ketika menuliskan command akan dibaca oleh "process.argv"
*/
console.table(process.argv);
