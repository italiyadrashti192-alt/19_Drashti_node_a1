// A program which calls useful functions in fs module.

const fs = require("fs");

fs.writeFileSync("sample.txt", "Hello Node.js\n");
console.log("....File created successfully....");

fs.appendFileSync("sample.txt", "I am appending data to the file\n");
console.log("...Data appended successfully....");

const data = fs.readFileSync("sample.txt", "utf8");
console.log("\nFile reading succesfullly");
console.log(data);

if (fs.existsSync("sample.txt")) {
    console.log("....file exists....");
} else {
    console.log("....File not exist....");
}

const info = fs.statSync("sample.txt");
console.log("Size:", info.size, "bytes");
console.log("File:", info.isFile());
console.log("Directory:", info.isDirectory());

fs.renameSync("sample.txt", "sample2.txt");
console.log("\n....File renamed succefully....");

fs.copyFileSync("sample2.txt", "sampleC.txt");
console.log("\n....File copied successfully....");

fs.unlinkSync("sample2.txt");
console.log("\n....File Deleted successfully.");

