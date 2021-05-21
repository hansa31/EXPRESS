const http = require('http')
const {readFileSync} = require('fs')        //to read index.html

//get the file
const homepage = readFileSync('./navbar-app/index.html')   //why readFileSync? -> this file is read only this time
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImg = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req,res) => {
    //console.log(req.method);
    //console.log(req.url);
    const url = req.url
    console.log(url);   //3 more requests in navbar/index.html
    if(url === '/'){
        res.writeHead(200,{'content-type':'text/html'})         // status code -> 200 (header -> metadata about our response)
        res.write(homepage)     //can prepare proper pages
        res.end()        //signals the communication is over
    }
    //about page
    else if(url === '/about'){
        res.writeHead(200,{'content-type':'text/html'})         // status code -> 200 (header -> metadata about our response)
        res.write('<h1>ABOUT PAGE</h1>')
        res.end()        //signals the communication is over
    }
    //styles
    else if(url === '/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})         // status code -> 200 (header -> metadata about our response)
        res.write(homeStyles)
        res.end()        //signals the communication is over
    }
    //image
    else if(url === '/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'})         // status code -> 200 (header -> metadata about our response)
        res.write(homeImg)
        res.end()        //signals the communication is over
    }
    //logic
    else if(url === '/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})         // status code -> 200 (header -> metadata about our response)
        res.write(homeLogic)
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
