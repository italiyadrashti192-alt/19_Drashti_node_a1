//Write a program to promisify fs.unlink function and call it.

const fs = require("fs");
const util = require("util");
const unlink = util.promisify(fs.unlink);

unlink("sample.txt")
    .then(() => {
        console.log("File deleted successfully");
    })
    .catch((err) => {
        console.log("Error:", err.message);
    });

