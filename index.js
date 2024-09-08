const path = require('path');
const fs = require('fs').promises;
//simulate database
//file system json

//1- connect file system -> js code
//............................{crud}........................
//2- write to file system  <- js code
const filePath = path.join( __dirname, 'products.json');
console.log(filePath);

class productsManager{
    constructor(){
       this.products =[];
    }

    async loadProducts(){
    const products = await fs.readFile(filePath,"utf-8");
   this.products = products
}


async saveProducts(){
    const data = {name: "product1", price: 100};
    await fs.writeFile(filePath, JSON.stringify(data));
}
}




