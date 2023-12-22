/*
    kita bisa menjalankan file js saat ini dengan menggunakan nodejs hanya perlu mengetikan perintah "node" lalu diikuti
    dengan nama file javascript kita saat ini yaitu "app.js" jadi keseluruhan command nya adalah

    command : "node app.js"

    ketika kita enter maka file javascript saat ini akan dieksekusi tanpa perlu bergantung pada browser, dan juga kita tidak
    perlu include file js ke HTML

    kita hanya perlu nodejs dan command untuk menjalankan file nya, maka otomatis akan dieksekusi
*/

for (i = 1; i <= 10; i++) {
    console.info("Hello World from JS File");
}

const abc = 1231;

if (abc === 123) {
    console.info("Betul");
} else {
    console.info("Salah");
}