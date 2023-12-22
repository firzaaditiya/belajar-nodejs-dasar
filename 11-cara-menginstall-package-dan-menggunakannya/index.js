/*
    ketika kita ingin menginstall suatu library menggunakan NPM kita perlu tahu apa nama package library yang ingin kita
    install

    contoh : https://www.npmjs.com/package/give-me-a-joke

    pada contoh diatas maka nama package nya adalah "give-me-a-joke", jadi kita bisa mengetikan perintah difolder dimana
    kita ingin menginstal nya

    command : npm install --save give-me-a-joke

    atau kita bisa lihat pada web npm saja untuk cara penginstalan nya

    kita juga bisa menginstall lebih dari 1 library tergantung kebutuhan kita saja, misalnya kita ingin menginstall agar
    output pada terminal menjadi warna warni tulisan nya


*/

// menggunakan library
const jokes = require("give-me-a-joke");
const chalkRainbow = require("chalk-rainbow");

// melihat ada apa saja didalam object
// console.info(jokes);

jokes.getRandomDadJoke(function(joke) {
    // console.info(joke);
    console.info(`Dad Joke : ${chalkRainbow(joke)}`);
});