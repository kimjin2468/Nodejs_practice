let http = require("http");
let url = require("url");
let fs = require("fs");

let app = http.createServer(function (req, res) {
  let query = url.parse(req.url, true).query;
  let _url = req.url;
  console.log(query);
  if (_url.indexOf("?") == true) {
    let idx = _url.indexOf("?");
    _url = _url.slice(0, idx);
  }

  if (_url === "/") {
    _url = "/index.html";
  }
  if (_url === "/favicon.ico") {
    return res.writeHead(404);
  }

  res.writeHead(200);
  res.end(fs.readFileSync(__dirname + _url));
});

app.listen(3000);
