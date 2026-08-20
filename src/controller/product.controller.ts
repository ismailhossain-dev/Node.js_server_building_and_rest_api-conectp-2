//file-3 ekane just product route data handle kora hobe
import type { IncomingMessage, ServerResponse } from "http";
import { readProduct } from "../service/product.service";

//req er mardome client teke data asbe
export const productController = (req:IncomingMessage, res:ServerResponse)=> {
const url = req.url ; 
const method = req.method; 
//http://locahost:3000/products 
if(url === "/products" && method === "GET"){
const products  = [
    {
        id:1, 
        name:"product -1", 
    }
]
//product.service route call
const product = readProduct()

//console.log("product controller route", product);//succss
 res.writeHead(200, {"content-type":"application/json"})
res.end(JSON.stringify({message: "This is a product route", data: products}))
}

}