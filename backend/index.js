const express = require("express")

const server = express()

//Rotas
server.get('/',(request, response) =>{
    return response.send("Teste")
})

server.get('/morango')

server.listen(3000)