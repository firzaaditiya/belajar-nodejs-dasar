/*
    package yang diinstall biasanya disimpan secara local namun kita juga bisa menginstal nya secara global, maksud dari
    local adalah hanya didalam project yang sudah pernah kita install saja library nya bisa digunakan

    biasa nya ketika kita menginstall suatu library secara global maka pada command pengisntalan nya akan ada "-g" yang
    artinya "global" atau library itu akan diinstall secara global dan bisa dipanggil dimanapun

    contoh library global : https://www.npmjs.com/package/cowsay

    kita menginstall library "cowsay" didalam folder cowsay, maka seharus nya kita tidak bisa menggunakan nya difolder lain
    maka dari itu ada sebuah cara agar kita bisa menggunakan nya yaitu, dengan cara melakukan "linking" pada library tersebut
    menggunakan "npm link" lalu diikuti dengan nama library nya

    command : "npm link cowsay", lakukan command ini pada folder yang ingin disambungkan yaitu "cowsay2"
*/