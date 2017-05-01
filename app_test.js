var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World Ini test Doang!!!\n');
}).listen(5000, '107.170.58.106');
console.log('Server running at http://107.170.58.106:5000/');
console.log("Tomy testing app di server lokal!");
