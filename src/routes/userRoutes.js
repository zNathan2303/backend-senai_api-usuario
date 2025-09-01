
const express = require('express')

const router = express.Router()

const userController = require('../controller/userController.js')

// Criando as rotas da nossa API

// 1º Rota para obter todos os usuários
router.get('/', userController.getAllUsers)

// 2º Rota para obter dados de um usuário por ID
router.get('/:id', userController.getUserById)

// 3º Rota para criar um novo usuário
router.post('/', userController.createUser)

module.exports = router