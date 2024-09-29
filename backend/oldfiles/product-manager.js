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
        console.log("run loading functions...");
    const products = await fs.readFile(filePath,"utf-8");
   this.products = JSON.parse(products)

}

async saveProducts(){
    const data = {name: "product1", price: 100};
    await fs.writeFile(filePath, JSON.stringify(data));
}
async getAll(){
    await this.loadProducts();
    return this.products;
}

async getOne(name){
    await this.loadProducts();
    const oneProduct =  this.products.findIndex( (item) =>{
        return item.name === name;
    });
    return this.products[oneProduct]
}
}

module.exports = productsManager;





