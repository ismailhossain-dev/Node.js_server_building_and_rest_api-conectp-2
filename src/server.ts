//folder-1
import { createServer, IncomingMessage, Server } from "http";

const server:Server = createServer ((req:IncomingMessage, res)=> {
    console.log(req.url) //route like "/", "/home", "/about", "facebook"
    console.log(req.method);//there are 4 method in node.js like get , post , delete ,patch or put
})

server.listen(3000, ()=> {
    console.log ("Server is running port 3000")
})
