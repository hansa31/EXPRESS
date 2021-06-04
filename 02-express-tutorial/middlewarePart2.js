const express = require('express')
const app = express()
const morgan = require('morgan')

//get the module logger
const logger = require('./logger')

const authorize = require('./middlewareFuncs/authorize')

//  req  =>  middleware  =>  res

/*
1. use vs route
2. options - our own / express / thirdparty(morgan)

example -> 
app.use(express.static('./public'))     --> static is a express built in middleware

//3rd party middleware
app.use(morgan('tiny'))     //GET / 304 - - 16.596 ms
*/

//using multiple logger functions
app.use([logger,authorize])     //executed in the order

app.get('/',(req,res) => {
    res.send("HOME")
})

app.get('/about',(req,res) => {
    res.send("ABOUT")
})

app.get('/api/products',(req,res) => {
    res.send("PRODUCTS")
})

//get user info ????
app.get('/api/items',(req,res) => {
    console.log(req.user);          //{ name: 'jhon', id: 3 }
    res.send("ITEMS")
})

app.listen(5000,() => {
    console.log("Serever is listening on port 5000...");
})