// const fs = require("fs").promises;
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("HelloWorld! (from node)");
});

server.listen(3000);

// const text = "This is a test - and it should be stored in a file!";

// fs.writeFile("node-message.txt", text).then(() => {
//   console.log("Writing file succeeded!");
// });
