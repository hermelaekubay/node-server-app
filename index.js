var http = require("http");

http
  .createServer(function (req, res) {
    console.log(req.url); // logs the URL requested

    var path = req.url.toLowerCase(); // Normalize the URL path

    switch (path) {
      case "/":
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Home page - JS 2 Class");
        break;
      case "/about":
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("About page - JS 2 Class Fall 2023");
        break;
      default:
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not found");
        break;
    }
  })
  .listen(3000); // listen on port 3000

console.log("Server running on http://localhost:3000");

var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello JS 2 Class - Fall 2023!");
  })
  .listen(8080); // listen on port 8080

console.log("Server running on http://localhost:8080");
