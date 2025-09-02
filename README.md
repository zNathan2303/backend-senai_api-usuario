# API Usuario
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

## Navegação
- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Executando o Projeto](#executando-o-projeto)
- [API Endpoints](#api-endpoints)
- [Autor](#autor)

## Sobre o Projeto
Este projeto é uma API backend desenvolvida durante as aulas da matéria de Backend com Node.js do SENAI, com o objetivo de praticar conceitos de criação de APIs REST. A API gerencia usuários (id, nome e email), permitindo operações de criação, listagem e obtenção de dados individuais.

## Tecnologias Utilizadas
- **Node.js** (Versão 22.14.0)
- **Express:** Framework para criação de APIs
- **Postman:** Ferramenta para testes de API


## Executando o Projeto

### Pré-requisitos
- **Node.js**
- **NPM** (gerenciador de pacotes do Node.js)
- **Postman** (ou outra ferramenta para testes de API)
- A API utiliza um array em memória para armazenar os dados dos usuários, sem dependência de banco de dados

### Passos
1. Clone esse repositório:
```bash
git clone https://github.com/zNathan2303/backend-senai_api-usuario
```
2. No terminal, rode na raiz do projeto:
```bash
npm install
```
3. Após instalar dependências do projeto, rode no terminal:
```bash
npm run dev
```
4. Abra o Postman e configure a URL base como `http://localhost:8000` e teste os endpoints.

## API Endpoints
A API fornece os seguintes endpoints:

| Método | Endpoint | Descrição |
| --- | --- | --- |
| `GET` | `/` | Retorna uma mensagem de funcionamento da API. |
| `GET` | `/api/users` | Retorna a lista de todos usuários. |
| `GET` | `/api/users/{userId}` | Retorna um usuário. |
| `POST` | `/api/users` | Cria um usuário. |

**Exemplo de Body para `POST` `/api/users`:**
```json
{
    "name": "João",
    "email": "joao@gmail.com"
}
```

## Autor
[Nathan da Silva Costa](<https://www.linkedin.com/in/nathandasilvacosta/>)