const express = require("express")

const cors = require('cors')

const server = express()

server.use(express.json())
server.use(cors())

const users = [
    {
        name: 'Euzebio',
        age: 20
    },
]

//Rotas
server.get('/home',(request, response) =>{
    response.send(users)
})

server.post('/usuarios', (request, response) =>{

    const newUser = request.body

    console.log(newUser)

    users.push(newUser)

    response.status(201).json(newUser)
})

server.delete('/usuarios/:id', (request, response) =>{

    console.log(request.params.id)
    const id = request.params.id

    users.splice(id, 1)

    response.send("Usuário deletado com sucesso")

})

server.listen(3000)