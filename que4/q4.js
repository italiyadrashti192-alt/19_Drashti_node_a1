//Write a program to create a compressed zip file for a folder.
const fs = require("fs");
const zlib = require("zlib");
const path = require("path");
const files = fs.readdirSync("./sample");

files.forEach((file) => {
    const inputPath = path.join("./sample", file);

    if (fs.statSync(inputPath).isFile()) {
        const input = fs.createReadStream(inputPath);

        const output = fs.createWriteStream(
            path.join("./sample", file + ".gz")
        );

        input
            .pipe(zlib.createGzip())
            .pipe(output)
            .on("finish", () => {
                console.log(file ,"compressed successfully");
            });
    }
});