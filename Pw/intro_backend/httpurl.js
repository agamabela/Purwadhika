const http = require('http')
const fs = require('fs')
const url = require('url')
const PORT = 3000
const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url == '/') {
        if (req.method == "GET") {
            res.writeHead(200, { "Content-Type": "text/html" })
            res.end("<h2>Hello /</h2>")
        }
    } else if (req.url.includes('/products')) {
        let products = fs.readFileSync('./data/products.json')
        console.log(queryObject);
       //mengubah format data menjadi object
       //console.log(JSON.parse(products))
       //console.log(url.parse(req.url, true).query.idproduct)
       console.log(url.parse(req.url, true).query)
        if (req.method == "GET") {
            res.writeHead(200, { "Content-Type": "application/json" })
            res.end(products)
            //mengubah data yang tadinya object menjadi string
        }
    }
    else if (req.url.includes('/user')) {
        let user = fs.readFileSync('./data/user.json')
        console.log(JSON.parse(user))
        console.log(url.parse(req.url, true).query.iduser)
        let queryID= url.parse(req.url, true).query
        if (req.method == "GET") {
            res.writeHead(200, { "Content-Type": "application/json" })
            res.end(user)
        } else if(req.queryID=="GET"){
            res.writeHead(200, { "Content-Type": "application/json" })
            res.end(queryID.id)
        }
    } else {
        if (req.method == "GET") {
            res.writeHead(404, { "Content-Type": "text/html" })
            res.end("<h2>Page Not Found</h2>")
        }
    }

})

server.listen(PORT, () => console.log(`Server running at ${PORT}`))