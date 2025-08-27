// Importar o módulo do Express
const express = require('express')

const userController = require('./src/controller/userController.js')

// Criar uma aplicação express
const app = express()

// Definir a porta em que o servidor irá escutar
const porta = 8000

// Rota de teste de API
app.get('/', (req, res) => {
    res.send('API de Usuário está funcionando')
})

app.get('/users', (req, res) => {
    userController.getAllUsers(req)
})

// Inicia o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})