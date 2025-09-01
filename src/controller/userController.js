
// Controller serve para controlar como vai ser feito as requisições

const userModel = require('../model/userModel.js')

// Método do controlador para listar todos os usuários
const getAllUsers = (req, res) => {
    const users = userModel.findAll()
    res.status(200).json(users)
}

// Método do controlador para obter um usuário por ID
const getUserById = (req, res) => {

    // Pegando o id que foi enviado na requisição
    const id = parseInt(req.params.id)

    // Chamando o método findById do userModel
    const user = userModel.findById(id)

    if (user) {
        // Responder com status code de 200 (Sucesso!) e devolver os dados do usuário em formato json
        res.status(200).json(user)
    } else {
        res.status(404).json({ mensagem: 'Usuário não encontrado no banco de dados!' })
    }
}

const createUser = (req, res) => {

    // Pegando os dados que foram enviados pelo body (corpo) da requisição
    const { name, email } = req.body

    // Validar se foram enviados
    if (!name || !email) {
        return res.status(400).json({ mensagem: 'Nome e email são obrigatórios' })
    } else {
        const newUser = userModel.createUser(name, email)
        res.status(201).json(newUser)
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
}