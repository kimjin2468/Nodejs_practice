# nodejs_practice

##nodejs 공부기록

- nodejs로 웹 구성해보기
- 동적인 페이지를 nodejs를통해 정적인 페이지로 바꿔보기



클라이언트에서 query값이 전달될경우 
31번 res.end(fs.readFileSync(__dirname + _url)에서 _url값에 쿼리값이 포함되어
오류발생

```
let http = require("http");
let url = require("url");
let fs = require("fs");

let app = http.createServer(function (req, res) {
  let query = url.parse(req.url, true).query;
  let _url = req.url;
  console.log(query);
 

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
```

#해결방법 
```
 if (_url.indexOf("?") == true) {
    let idx = _url.indexOf("?");
    _url = _url.slice(0, idx);
  }
  if문을 통해 _url안에 쿼리값이 들어갈경우 slice메서드를 통해 '?'가 포함된 문자 뒷부분을 모두 삭제 하여 
```


