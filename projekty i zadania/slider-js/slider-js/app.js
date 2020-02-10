const start = process.argv[2];
const http = require("http");
const server = http.createServer();
const fs = require("fs");
const path = require("path");

if (start === "start") {
  fs.readFile(path.join(__dirname, "index.html"), (err, page) => {
    server
      .addListener("request", (req, res) => {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(page);
      })
      .listen(3000, "127.0.0.1");
  });
} else {
  console.log(`nic nie rozumiem`);
}
