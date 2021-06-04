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

//export this
module.exports = logger