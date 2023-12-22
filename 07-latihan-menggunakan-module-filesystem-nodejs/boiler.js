/*
    pada module nodejs filesystem kita bisa menggunakan nya untuk keperluan automasi dalam pembuatan file / folder, seperti
    ketika kita belajar javascript data yang masih memerlukan browser dimana kita selalu membuat file html secara manual
    kita bisa menggunakan ini untuk membuat file/folder secara otomatis
*/

// import module
// import { mkdir } from "node:fs";

// mengambil module fs `file system`
const fs = require("fs");

// https://nodejs.org/docs/latest/api/fs.html#fsmkdirpath-options-callback
const options = {
    recursive: true
};

/*
    method ini bersifat asynchronous dimana dia akan diproses secara terpisah atau tanpa menunggu proses nya selesai
    untuk lanjut ke baris selanjutnya
*/
// versi asynchronous
// fs.mkdir("project", options, (err) => {
//     console.info("di dalam callback");

//     if (err) {
//         throw err;
//     }
// });

/*
    ketika menggunakan module file system sebaiknya mengguakan try & catch dalam penulisan code
*/
try {
    // versi synchronous
    fs.mkdirSync("project");

    /*
        bisa saja ini muncul lebih dulu dari pada console.info yang berada di dalam callback async belum selesai, namun ketika
        kita menggunakan versi blocking/synchronous maka ini akan dijalankan setelah proses diatas selesai lebih dulu
    */
    // console.info("setelah fungsi mkdir");

    /*
        membuat file html didalam folder project dengan method synchronous writeFile

        // https://nodejs.org/docs/latest/api/fs.html#fswritefilesyncfile-data-options
    */
    fs.writeFileSync("project/index.html", "");
    console.info("berhasil");
} catch(err) {
    // console.info(err);
    console.info(err.message);
}