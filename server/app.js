// npm install express
const express = require("express");
const app = express();
// server
const httpServer = require("http").createServer(app);
const socketServer = require("socket.io")(httpServer);
// const path = require("path");
app.use(express.static("activity"));

socketServer.on("connection", function (socket) {
    console.log("New client connected")
    console.log(socket.id);
    // listener=> recieve
    socket.on("colorChange", function (color) {
        console.log(color);
        
        socket.broadcast.emit('rColorChange', color);
    })
})
//  tcp => uniquely identify server on a machine

let port=process.env.PORT||3000;
httpServer.listen(3000, function () {
    console.log("Server is listening to request at port 3000");
})
