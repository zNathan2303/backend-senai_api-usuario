
const userModel = require('../model/userModel.js')

// Controlador para listar todos os usuários
const getAllUsers = (req, res) => {
    const users = userModel.findAll()
    res.send(200).json(users)
}

module.exports = {
    getAllUsers
}