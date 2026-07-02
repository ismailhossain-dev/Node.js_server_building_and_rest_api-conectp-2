//folder-1
import { createServer, IncomingMessage, Server } from "http";
const server:Server = createServer ((req:IncomingMessage, res)=> {
    // console.log(req.url) //route like "/", "/home", "/about", "facebook"
    // console.log(req.method);//there are 4 method in node.js like get , post , delete ,patch or put

    const url = req.url ; 
    const method = req.method; 

    if(url === "/" && method === "GET"){
    //step-1 response eta terminal or console e dekabe
    //    console.log("this is root route");//success 
    
    //step-2 response eta localhost web brower dekabe 
    // node.js docs teke deke kaj ta korche respnose er jonno
    res.writeHead(200, {"content-type":"application/json" })
    //text/plan response
    // res.end("This is a root rout ")

    //======json format response  application/json=========
    // res.end({message: "This is a root route"}) //ei response dile server crush korbe
    //=======baffer hisabe response deya lagbe============
    res.end(JSON.stringify({message: "this is a root route "}))
    
    }
    //=== use na kore starsWith use kore response
    else if(url?.startsWith("/products")){
       res.writeHead(404, {"content-type": "application/json"})
        res.end(JSON.stringify({message: "This is a product route "}))
    }
     else{
        res.writeHead(404, {"content-type": "application/json"})
        res.end(JSON.stringify({message: "Route not foundd "}))
    }
})

server.listen(3000, ()=> {
    console.log ("Server is running port 3000")
})
