// __filename
console.log("\nCurrent file path :",__filename);

// __dirname
console.log("\nCurrent directory :",__dirname);

// process object
console.log("\nVersion :",process.version);
console.log("\nOperating system :",process.platform);

// Command Line Arguments
console.log("\nArguments :");

const args = process.argv.slice(2);

if (args.length === 0) {
    console.log("No arguments provided.");
} else {
    args.forEach((arg, index) => {
        console.log(`Argument ${index + 1}: ${arg}`);
    });
}
