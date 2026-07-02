//file-4: ekane produc.coller ke easy korar jonno ei file ta create kora holo
//ei function src/controller/product.controller.ts  call hoitese
//amra ei file er mardome src/database/db.json file take bahir korbo

import  fs  from "fs"
import path from "path"

//path eta node.js feature 

const pathName = path.join(process.cwd(), "/src/database/db.json")
export const readProduct = ()=> {
 //console.log("hello i am path name", pathName)//success

//file systeam read korbo mane db.json file data gola ei file er mardome dekbo
//fs.readFileSync eta node.js teka astese
const proudcts = fs.readFileSync(pathName)
//data ta baffer hisabe asilo and kichu buja jaitechilo na tai string convert korchi
// console.log("db.js joson data dekabe", proudcts.toString());

}

