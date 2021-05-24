const express = require('express')
const path = require('path')        //to provide absolute path
const app = express()

//setup static and middleware -> setup paths, headers etc.
app.use(express.static('./public'))         //public folder for general convention for resources (static assets)

//how to set something dynamic ? ---> server side rendering...

/*
app.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))     //provide the absolute path (from begining)
//  other options -->
//  1. adding to static assets
//  2. server side rendering
})
*/

//for 404
app.all('*',(req,res) => {
    res.status(404).send('<h1>Resource not Found</h1>')
    //res.status(404).json({error: "not found"})
})


app.listen(5000,()=>{
    console.log('Server is listening on port 5000...');
})

//usefull methods ------->
//app.get
//app.post
//app.put
//app.delete
//app.all       -> works with all of them
//app.use       -> responsible for middleware
//app.listen  
