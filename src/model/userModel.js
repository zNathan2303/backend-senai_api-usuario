// Simulação de um banco de dados em memoria

let users = [
    {
        id: 1,
        name: 'Alice',
        email: 'alice@gmail.com'
    },
    {
        id: 2,
        name: 'Robert',
        email: 'robert@gmail.com'
    },
    {
        id: 3,
        name: 'José',
        email: 'jose@gmail.com'
    }
]

// Função para buscar todos os usuários
const findAll = () => {
    return users
}

// Função para buscar um usuário por ID
const findById = (id) => {
    return users.find(user => user.id === id)
}

// Função que adiciona um novo usuário
const createUser = (newUser) => {
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1
    const userWithId = { id: newId, ...newUser }
    users.push(userWithId)
    // users.push({
    //     id: newId,
    //     ...newUser
    // })
    return userWithId
}

// Exportar as funções
module.exports = {
    findAll,
    findById,
    createUser
}