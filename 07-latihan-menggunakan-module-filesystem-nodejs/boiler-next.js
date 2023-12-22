// membuat instance filesystem
const fs = require("fs");

// mendapatkan data argv
const folderNames = (process.argv.slice(2).length < 1) ? ["project"] : process.argv.slice(2);

try {
    folderNames.forEach((folderName) => {
        // membuat folder
        fs.mkdirSync(folderName);

        // membuat file yang akan dihasilkan / generate
        fs.writeFileSync(`${folderName}/index.html`, "");
        fs.writeFileSync(`${folderName}/app.js`, "");
        fs.writeFileSync(`${folderName}/app.css`, "");

        console.info(`berhasil membuat boiler : ${folderName} `);
    });
} catch(error) {
    // menampilkan pesan error jika ada error
    console.info(error.message);
}