const express = require('express')
const app = express()

//to get data.js --> {products,data}
const {products} = require('./data')

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1> <a href = "/api/products">products</a>')
})

app.get('/api/products',(req,res) => {
    //to get specific data in the js(json) file
    const newProducts = products.map((product) =>{
//Function that is called for every element of arr. Each time callbackFn executes, the returned value is added to newArray.
        const{name,id,image} = product;
        return{name,id,image}
    })

    res.json(newProducts)
})

/*
app.get('/',(req,res) => {
    res.json([{name:'john'},{name:'susan'}])
})
*/

app.listen(5000,()=>{
    console.log('Server is listening on port 5000...');
})

/*
//just for playing with json
const newProductsArray = products.map((newproducts)=>{
    console.log(newproducts);
    const {name,id} = newproducts
    return {name,id}
})
console.log(newProductsArray);
*/


/*
const newProducts = products.map((product) =>{
    const{name,id,image} = product;
    return{name,id,image}
})
*/