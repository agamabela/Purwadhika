const http = require('http');
const url = require('url');
const fs = require('fs')

http.createServer(function (req, res) {
  if (req.url.includes('/products')) {
    let products = fs.readFileSync('./data/products.json')
    products = JSON.parse(products)

    if (req.method == "GET") {
      const id = url.parse(req.url,true).query.id;

      const product = products.filter(product => product.id != id)
      const produk = fs.readFileSync('./data/products.json')
      
      res.writeHead(200, {'Content-Type': 'application/json'});
      if (!product.length) {
        res.end(produk)
      } else {
        res.end(JSON.stringify(product));
      }
    }
  }
}).listen(8080);