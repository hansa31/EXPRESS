const http = require('http')

const server = http.createServer((req,res) => {
    //console.log(req.method);
    //console.log(req.url);
    const url = req.url

    if(url === '/'){
        res.writeHead(200,{'content-type':'text/html'})         // status code -> 200 (header -> metadata about our response)
        res.write('<h1>HOME PAGE</h1>')
        res.end()        //signals the communication is over
    }
    //about page
    else if(url === '/about'){
        res.writeHead(200,{'content-type':'text/html'})         // status code -> 200 (header -> metadata about our response)
        res.write('<h1>ABOUT PAGE</h1>')
        res.end()        //signals the communication is over
    }
    //404 -> file not found
    else{
        res.writeHead(404,{'content-type':'text/html'})         // status code -> 200 (header -> metadata about our response)
        res.write('<h1>PAGE NOT FOUND</h1>')
        res.end()        //signals the communication is over
    }
    
})

//listenes for connections
server.listen(5000)     //think of SLT calls(port)