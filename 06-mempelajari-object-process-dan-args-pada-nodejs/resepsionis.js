// mendapatkan data argument pada command yang dijalankan
// slice akan menghapus 2 nilai pertama
const args = process.argv.slice(2);

// perulangan untuk data array args
for (let arg of args) {
    console.info(`Selamat datang, ${arg}`);
}

/*
    jadi ketika kita memberikan data argumen pada command ketika mengeksekusi file nya, akan dibaca dan ditampilkan

    contoh : node resepsionis.js firza kurumi kato
*/