//Develop a web server which serves static resources.

const Static = require("node-static");
const fileServer = new Static.Server("./static");

const http = require("http");

const server = http.createServer(function (req, res) {
    req.addListener("end", function () {
        fileServer.serve(req, res);
    }).resume();
});

server.listen(3000, () => {
    console.log("server running on port 3000");
});