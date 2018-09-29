const http = require("http");
const fs = require('fs');
const ws = require("socket.io");

const server = http.createServer(function(req,res){
    const html = fs.readFileSync("client.html");
    res.end(html);
});
const io  = ws(server);

io.on("connection", function(socket){
  socket.on("message",function(mes){
    io.emit("message",mes);
  })
})

server.listen(3000);
