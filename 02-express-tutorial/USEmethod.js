const express = require('express')
const app = express()
//get the module logger
const logger = require('./logger')

//  req  =>  middleware  =>  res

/*
When we have middleware we must pass it on to the next middleware
unless by terminating the cycle by sending a respond
*/

//pass in the middleware for every paths
//app.use(logger)     //Order matters

//by using a path       --> see documentation
app.use('/api',logger)      //only paths after api

app.get('/',(req,res) => {
    res.send("HOME")
})

app.get('/about',(req,res) => {
    res.send("ABOUT")
})

app.get('/api/products',(req,res) => {
    res.send("PRODUCTS")
})

app.get('/api/items',(req,res) => {
    res.send("ITEMS")
})

app.listen(5000,() => {
    console.log("Serever is listening on port 5000...");
})