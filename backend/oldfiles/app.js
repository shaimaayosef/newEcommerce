const productManager = require('./product-manager.js')
const manager = new productManager();

async function getAllProducts(){
    try{
        const products = await manager.getAll();
        console.log(products);
    }catch(error){
        console.error(error);
 }finally { console.log("done");
    
}}
async function getOneProduct(){
    try{
        const products = await manager.getOne('product1');
        console.log(products);
    }catch(error){
        console.error(error);
 }finally { console.log("done");
    
}}
getOneProduct();

