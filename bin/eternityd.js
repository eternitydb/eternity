#!/usr/bin/env node

const net = require("net")

const dbServer = net.createServer((socket) => {
    socket.write("Echo Server\r\n")
    socket.pipe(socket)
})

dbServer.listen(9887, '127.0.0.1')