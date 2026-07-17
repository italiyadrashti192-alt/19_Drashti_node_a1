// Set a server script, a test script and 3 user defined scripts in package.json file in your nodejs application.
const http = require("http");

const server = http.createServer((req, res) => {

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello Node.js Server");
});

server.listen(8000, () => {
    console.log("Server is running on 8000");
});