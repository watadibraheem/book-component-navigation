const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let filePath = "";

  if (req.url === "/" || req.url === "/page.html") {
    filePath = path.join(__dirname, "templates", "page.html");
    res.writeHead(200, { "Content-Type": "text/html" });
  } else if (req.url === "/about") {
    filePath = path.join(__dirname, "templates", "about.html");
    res.writeHead(200, { "Content-Type": "text/html" });
  } else if (req.url === "/contact") {
    filePath = path.join(__dirname, "templates", "contact.html");
    res.writeHead(200, { "Content-Type": "text/html" });
  } else if (req.url.match(".css$")) {
    filePath = path.join(__dirname, "css", "styles.css");
    res.writeHead(200, { "Content-Type": "text/css" });
  } else if (req.url.match(".png$")) {
    filePath = path.join(__dirname, "templates", "book.png");
    res.writeHead(200, { "Content-Type": "image/png" });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Page Not Found</h1>");
    return;
  }
  fs.createReadStream(filePath).pipe(res);
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000/");
});