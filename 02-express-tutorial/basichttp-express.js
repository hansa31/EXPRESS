const express = require('express')      //import the module
const app = express()       //invoke it

//console.log(express);
//console.log(app);

app.get('/',(req,res) => {      //path,callback -> will be invoked everytime a user req get
    res.status(200).send('HOME PAGE')
})

app.get('/about',(req,res) => {
    res.send('ABOUT PAGE')
})

//for the 404
app.all('*',(req,res) => {
    res.status(404).send('<h1>Resource not found</h1>')
})   //cover all the methods in server (handles all HTTP verbs)

app.listen(5000,()=>{
    console.log('server is listening on port 5000...');
})

//usefull methods ------->
//app.get
//app.post
//app.put
//app.delete
//app.all       -> works with all of them
//app.use       -> responsible for middleware
//app.listen  


