const http = require("http");
const PORT = 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  res.end("<h1>Hello Node!!!!</h1>\n");
});
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
