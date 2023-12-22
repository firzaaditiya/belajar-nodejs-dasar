/*
    kita tahu bahwa kita bisa menyertakan atau memanggil file javascript lain menggunakan "require()", namun bagaimana
    jika kasusnya ketika kita memiliki folder khusus dan didalam folder tersebut memiliki banyak file javascript, apakah
    kita perlu melakukan "require" satu per satu? jawaban nya tidak karena ada metode yang dimana kita bisa melakukan
    "require" satu kali namun bisa menyertakan banyak file atau memanggil banyak file
*/

/*
    melakukan require namun hanya dengan nama folder nya saja, karena pada folder cats terdapat file "index.js" yang mana itu
    akan menjadi file utama yang didalam nya terdapat file file yang dibutuhkan sudah di sertakan semua, kita hanya perlu
    menuliskan nama folder nya karena file "index.js" sudah akan otomatis terbaca atau module akan secara otomatis
    memanggil file yang bernama "index"
*/
const cats = require("./cats");

console.info(cats);
console.info(cats[0]);