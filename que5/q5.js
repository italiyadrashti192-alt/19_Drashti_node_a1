//Write a program to extract a zip file.

const fs=require("fs");
const zlib=require("zlib");
const input=fs.createReadStream("sample.txt.gz");
const output=fs.createWriteStream("extracted_sample.txt");

input.pipe(zlib.createGunzip())
  .pipe(output)
  .on("finish",()=>{
    console.log("file extracted successfully");
  })