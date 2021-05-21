const http = require('http')

const server = http.createServer((req,res) => {
    console.log('user hit the server');
    res.end("HOME PAGE")        //signals the communication is over
})

//listenes for connections
server.listen(5000)     //think of SLT calls(port)

