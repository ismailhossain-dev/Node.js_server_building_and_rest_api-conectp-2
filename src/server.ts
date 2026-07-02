//folder-1
import { createServer, IncomingMessage, Server } from "http";
import { routeHandler } from "./routes/route";
const server:Server = createServer ((req:IncomingMessage, res)=> {
    routeHandler(req, res)
})

server.listen(3000, ()=> {
    console.log ("Server is running port 3000")
})
