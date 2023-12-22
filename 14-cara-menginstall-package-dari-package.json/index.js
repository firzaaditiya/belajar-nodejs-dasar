/*
    terkadang ketika kita ingin membagikan project kita, kita tidak perlu menyertakan folder "node_modules" yang berisi
    sebuah library yang dibutuhkan pada project kita yang sudah diinstall, tetapi kita hanya perlu menyertakan file 
    "package.json" nya sajak. Karena folder "node_modules" size nya terlalu besar terkadang dan itu sangat tidak disarankan
    untuk menyertakan nya

    kita hanya perlu menyertakan file "package.json" nya saja, dan ketika ada orang yang ingin menggunakan project kita, dia
    hanya perlu melakukan "npm install", maka library library atau dependencies yang dibutuhkan yang ada di file
    "package.json" akan otomatis terinstall semua
*/