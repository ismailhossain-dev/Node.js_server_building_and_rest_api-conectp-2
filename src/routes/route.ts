//file-2 all route handle korboe ekane 
import type { IncomingMessage, ServerResponse } from "http";
//just routeHandler file ta route.ts call divo 
export const routeHandler = (req: IncomingMessage, res:ServerResponse)=> {
const url = req.url ; 
    const method = req.method; 

    if(url === "/" && method === "GET"){
    res.writeHead(200, {"content-type":"application/json" })
    res.end(JSON.stringify({message: "this is a root route "}))
    
    }
    else if(url?.startsWith("/products")){
       res.writeHead(404, {"content-type": "application/json"})
        res.end(JSON.stringify({message: "This is a product route "}))
    }
     else{
        res.writeHead(404, {"content-type": "application/json"})
        res.end(JSON.stringify({message: "Route not foundd "}))
    }
}