//  Develop a node web server with a route /google which can fetch data of google page using fetch() using async-await model and show as a response.

const http = require("http")
const server = http.createServer(async (req, res) => {
    if (req.url === "/google") {
        try {
            const response = await fetch("https://www.google.com");
            const data = await response.text();
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
        catch (error) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Eroor: fetching the google page");

        }
    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page not found...!");
    }
})
server.listen(3000, () => {
    console.log("Server running on port 3000");
})      