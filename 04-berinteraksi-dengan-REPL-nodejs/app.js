/*
    ketika kita mengetikan command "node" maka kita tidak bisa melakukan perintah yang dimiliki oleh CMD bawaan kita, karena
    kita sudah masuk ke lingkup "nodejs" atau sedang menjalankan progarm nodejs

    pada nodejs kita juga memiliki REPL (Read Eval Print Loop), jadi ketika kita mengetikan suatu sintaks maka hasilnya akan
    langsung muncul, mungkin seperti kita menggunakan fitur console pada web browser ketika kita melakukan inspect > console

    namun ada beberapa hal yang tidak bisa digunakan pada REPL milik nodejs ini, yaitu contoh nya operasi DOM, karena ya pada
    dasarnya DOM tidak ada dinodejs melainkan berada pada browser

    namun kita bisa memanfaatkan object "global" dimana itu berisikan function function yang sudah ada dan terdaftar, kita
    bisa melihat nya seperti ada "setTimeout, setInterval"
*/