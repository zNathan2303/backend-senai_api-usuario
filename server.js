
// Importar o módulo do Express
const express = require('express')

// Importar as rotas de usuário
const userRoutes = require('./src/routes/userRoutes.js')

const userController = require('./src/controller/userController.js')

// Criar uma aplicação express
const app = express()

// Definir um Middleware para analisar json no corpo das requisições
app.use(express.json())

// Definir a porta em que o servidor irá escutar
const porta = 8000

// Rota de teste de API
app.get('/', (req, res) => {
    res.send('API de Usuário está funcionando corretamente')
})

// Usando as rotas de usuário
app.use('/api/users', userRoutes)

// Inicia o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})