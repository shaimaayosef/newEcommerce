// entry point
// express -> server ( request | response )

const express = require("express");
const mongoose = require("mongoose");
const productsRoutes = require("./routes/products-routes");
const app = express();

mongoose.connect("mongodb+srv://shimaa:shimaa6488@cluster0.oojkl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
mongoose.connection.on("connected",()=>console.log("connected to Mongodb"))
// Router middleware
app.use(express.json());

// json -> JS

// app.METHOD
// app.post("/", productsController.createProduct);

// app.get("/", productsController.listAllProducts);

// router middleware
app.use("/products", productsRoutes);

app.listen(5000, () => {
  console.log(`Example app listening on port 5000`);
});