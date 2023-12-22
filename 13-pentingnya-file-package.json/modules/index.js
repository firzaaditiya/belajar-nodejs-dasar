/*
    https://www.npmjs.com/package/format-money-js

    diatas adalah sebuah package dimana tidak memerlukan sebuah "dependencies" lain, artinya dia independent, ketika kita
    melakukan inisialisasi awal maka, "package.json" tidak memiliki "dependencies" apapun, namun dia hanya memiliki sebuah
    "devDependencies" yang mana itu digunakan pada saat proses pembuatan saja atau pada saat development saja bukan untuk
    production atau untuk public

    "package.json" selain untuk memberitahu "dependencies" apa saja yang diperlukan, file ini berfungsi ketika project
    kita dibagikan kepada orang lain atau teman kita, diamana biasanya kita tidak menyertakan folder "node_modules" didalam
    file yang kita bagikan, karena ketika kita menyertakan "node_modules" kedalam file yang kita bagikan kepada orang lain
    maka akan memiliki banyak sekali file yang seharus nya bisa diinstal secara mandiri oleh orang orang yang menerima file
    dari kita atau file project kita, dan didalam "node_modules" juga memiliki terlalu banyak file jadi tidak disarankan
    ketika kita berbagi source project nodejs kita, ktia menyertakan folder "node_modules". lebih baik dihindari, karena kita
    hanya perlu menyertakan file "package.json" maka orang orang yang ingin menjalankan project kita perlu menginstall
    "dependencies" dari project kita terlebih dahulu dan data "dependencies" nya berada di dalam file "package.json"

    orang orang yang memiliki source code project kita hanya perlu mengetikan atau menjalankan command "npm install" untuk
    menginstall seluruh "dependencies" yang dibutuhkan pada project kita agar bisa berjalan dengan normal
*/