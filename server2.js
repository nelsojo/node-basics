var http = require("http")
var fs = require('fs')
var aSyncContents
var fileContents = fs.readFileSync('./lib/index.html', 'utf8')
fs.readFile('./lib/index.html', 'utf8', function (err, data) {
    if (err) {
        throw err
    } else {
        console.log("== async file contents:", data)
        aSyncContents = data
    }
})

//req = request, res = response
var server = http.createServer(function(req, res){

    var served = false
    console.log("A Request was recieved")
    console.log("req.method--> \n", req.method)
    console.log("req.url--> \n", req.url)
    console.log("req.headers\n-----------", req.headers)

    res.statusCode = 200
    res.setHeader('Content-Type', "text/html")

    if ((req.url === '/Cats') ||(req.url === '/cats')) {
    res.write("<html>")
    res.write("<body>")
    res.write("<h1>Cats</h1>")
    res.write("</body>")
    res.write("</html>") 
    served= true
    }

    if ((req.url === '/Dogs') ||(req.url === '/dogs')) {
        res.write("<html>")
        res.write("<body>")
        res.write("<h1>Dogs</h1>")
        res.write("</body>")
        res.write("</html>")
        served= true 
        }

    if (req.url === '/close'){
        console.log("Server is exiting")
        process.exit()
    }
    if (req.url === '/') {
    res.write("<html>")
    res.write("<body>")
    res.write("<h1>Home Page</h1>")
    res.write("</body>")
    res.write("</html>")
    served= true
    }
    if (req.url === '/home') {
        console.log(aSyncContents)
        setTimeout( res.write(aSyncContents), 3000)
        served= true
        }
     else if (!served) {
        res.write("<html>")
        res.write("<body>")
        res.write("<h1>404 not found</h1>")
        res.write("</body>")
        res.write("</html>")
        }   
})



//takes 2 arguments: TCP port # and a callback function
server.listen(65373 , function () { 
    console.log("Server is Listening on port  65373")
} )


