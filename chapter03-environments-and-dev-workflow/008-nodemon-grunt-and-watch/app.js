"use strict";

var path = require("path");
var http = require("http");
var fs = require("fs");

var app = http.createServer(function(req, res) {
  console.log("Request received: ", req.url);

  var url = req.url === "/" ? "/views/home.html" : "/views/error.html";
  var filename = path.join(process.cwd(), "build" + url);

  console.log("About to read file ", filename);
  fs.readFile(filename, { encoding: "utf8" }, function(err, html) {
    res.writeHead(200);
    res.end(html);
  });
});

app.listen(3000, function() {
  console.log(">> app listening on http://localhost:3000");
});
