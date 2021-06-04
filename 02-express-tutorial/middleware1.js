const express = require('express')
const app = express()

//  req  =>  middleware  =>  res

//this is used in about page
//****this is a middleware
const logger = (req,res,next) => {      // IMPORTANT --> express provides the req and res objects for this function
    const method = req.method       
    const url = req.url
    const time = new Date().getFullYear()   
    console.log(method, url, time); 
    //res.send("TESTING")       terminating middleware by our own response
    next()      //passing to the next middleware
}

/*
When we have middleware we must pass it on to the next middleware
unless by terminating the cycle by sending a respond
*/

app.get('/',(req,res) => {
    const method = req.method       //this is not convinient -> therfore have a function
    const url = req.url
    const time = new Date().getFullYear()   
    console.log(method, url, time);     // -> GET / 2021
    res.send("HOME")
})

app.get('/about',logger,(req,res) => {
    res.send("ABOUT")
})


app.listen(5000,() => {
    console.log("Serever is listening on port 5000...");
})