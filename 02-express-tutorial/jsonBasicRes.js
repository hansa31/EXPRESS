const express = require('express')
const app = express()

//to get data.js --> {products,data}
const {products} = require('./data')

app.get('/',(req,res)=>{
    res.json(products)
})

/*
app.get('/',(req,res) => {
    res.json([{name:'john'},{name:'susan'}])
})
*/

app.listen(5000,()=>{
    console.log('Server is listening on port 5000...');
})