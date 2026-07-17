const http= require("http")
const fs=require("fs")

const server=http.createServer((req,res)=>{
    //Route to display HTML page

    if(req.url==="/")
    {
        fs.readFile("index.html",(err,data)=>{
            if(err){
                res.writeHead(500,{"Content-Type":"text/plain"});
                res.end("error loading html file")
            }else{
                res.writeHead(200,{"Content-Type":"text/html"})
                res.end(data)
            }
        })
    }
    else if(req.url==="/gethello" && req.method==="GET"){
         res.writeHead(200,{"Content-Type":"text/plain"})
         res.end("Hello Nodejs !!")

    }
    else{
        res.writeHead(404,{"Content-Type":"text/plain"})
         res.end("Page not found !!")

    }
})

server.listen(3000,()=>{
    console.log("server running on port 3000")
})