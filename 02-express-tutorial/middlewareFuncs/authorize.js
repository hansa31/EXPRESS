/*
const authorize = (req,res,next) => {
    console.log("AUTHORIZE");
    next()
}
*/

//example using query string

const authorize = (req,res,next) => {           //http://localhost:5000/api/items/?user=jhon
    const {user} = req.query
    console.log(req.query);         //{ user: 'jhon' }
    
    if(user == 'jhon'){
        req.user = {name: 'jhon', id:3} 
        console.log('Authorized user');
        next()
    }else{
        res.status(401).send('Unauthorized')
    }
}


module.exports = authorize