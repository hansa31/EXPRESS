const express = require('express')
const app = express()

let {people} = require('./data')      //will so modifications therefore use let insted of const


//POST -> insert data into the server
//static assets to demonstrate post method 
//if we want to add data to the server there needs to be a body to enter data -> methods-public/index.html
app.use(express.static('./methods-public'))

//middleware to actually add data (to acess the form data)

//parse from data -> add the data to req.body
//in order to get data
app.use(express.urlencoded({extended: false}))  //express docs -> http://expressjs.com/en/5x/api.html#express.urlencoded


//adding the path
app.post('/login',(req,res)=>{
    console.log(req.body)
    const{name} = req.body

    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }

    res.status(404).send('Please send credentials')
})


//GET -> default method of the browser
app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})


app.listen(5000,() => {
    console.log("Serever is listening on port 5000...");
})