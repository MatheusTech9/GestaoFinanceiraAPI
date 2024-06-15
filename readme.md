# 🏦💰 API de Gestão Financeira Pessoal

Esta API de Gestão Financeira Pessoal permite criar, listar, atualizar e excluir tarefas relacionadas a finanças pessoais, como usuários e transações. A API foi construída utilizando Node.js, Express, Sequelize e MySQL.

## 📥 Instalação e Configuração

### 📋 Pré-requisitos

- 🖥️ Node.js instalado (versão 14 ou superior)
- 🗄️ MySQL instalado e configurado

### 🛠️ Passos para Configuração

1. **📂 Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/finance-manager-api.git
    cd finance-manager-api
    ```

2. **🔧 Instale as dependências do projeto:**
    ```bash
    npm install
    ```

3. **🔑 Configure as variáveis de ambiente:**

    Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:
    ```plaintext
    DB_HOST=localhost
    DB_USER=seu_usuario
    DB_PASSWORD=sua_senha
    DB_NAME=finance_manager
    DB_DIALECT=mysql
    DB_PORT=3306
    ```

4. **📊 Inicialize o banco de dados e aplique as migrações:**
    ```bash
    npx sequelize-cli db:migrate
    ```

5. **🚀 Inicie o servidor:**
    ```bash
    npm start
    ```

6. **🌍 Acesse a API em `http://localhost:3000`.**

## 📁 Estrutura do Projeto

A estrutura do projeto segue a arquitetura MVC (Model-View-Controller):

```
finance-manager-api
│
├── config/             # 🛠️ Configurações do banco de dados
├── controllers/        # 🎛️ Lógica dos controladores da API
├── migrations/         # 🗂️ Scripts de migração do banco de dados
├── models/             # 📋 Modelos Sequelize
├── routes/             # 🛣️ Definições de rotas da API
├── .env                # 🔐 Variáveis de ambiente
├── app.js              # 🚀 Arquivo principal da aplicação
├── package.json        # 📦 Informações do projeto e dependências
└── README.md           # 📄 Documentação da API
```

## 🗃️ Modelos de Dados

### 👤 User

- `id` (INTEGER, PRIMARY KEY, AUTO_INCREMENT)
- `name` (STRING, NOT NULL)
- `email` (STRING, UNIQUE, NOT NULL)
- `createdAt` (DATE, NOT NULL)
- `updatedAt` (DATE, NOT NULL)

### 💸 Transaction

- `id` (INTEGER, PRIMARY KEY, AUTO_INCREMENT)
- `userId` (INTEGER, FOREIGN KEY, references `users(id)`, NOT NULL)
- `amount` (FLOAT, NOT NULL)
- `description` (STRING, NOT NULL)
- `date` (DATE, NOT NULL)
- `createdAt` (DATE, NOT NULL)
- `updatedAt` (DATE, NOT NULL)

## 🌐 Rotas da API

### 👤 Usuários

- `GET /users`: 📝 Lista todos os usuários.
- `GET /users/:id`: 🔍 Retorna um usuário específico.
- `POST /users`: ✏️ Cria um novo usuário.
- `PUT /users/:id`: 🔄 Atualiza um usuário existente.
- `DELETE /users/:id`: ❌ Exclui um usuário.

### 💸 Transações

- `GET /transactions`: 📋 Lista todas as transações.
- `GET /transactions/:id`: 🔍 Retorna uma transação específica.
- `POST /transactions`: ✏️ Cria uma nova transação.
- `PUT /transactions/:id`: 🔄 Atualiza uma transação existente.
- `DELETE /transactions/:id`: ❌ Exclui uma transação.

## 🛠️ Testando com Postman

1. Abra o **Postman** e crie um novo ambiente para a API.
2. Defina a variável `{{base_url}}` com o valor `http://localhost:3000`.
3. 📥 Importe a coleção de exemplos para facilitar os testes.

## 📋 Exemplos de Requisição

### 👤 Criar Usuário

**Requisição**:
```http
POST {{base_url}}/users
```

**Corpo**:
```json
{
  "name": "Usuario",
  "email": "usuario@example.com"
}
```

**Resposta**:
```json
{
  "id": 1,
  "name": "Usuario",
  "email": "usuario@example.com",
  "createdAt": "2024-06-14T12:00:00.000Z",
  "updatedAt": "2024-06-14T12:00:00.000Z"
}
```

### 💸 Criar Transação

**Requisição**:
```http
POST {{base_url}}/transactions
```

**Corpo**:
```json
{
  "userId": 1,
  "amount": 999.99,
  "description": "Teste de Transação",
  "date": "2024-06-15"
}
```

**Resposta**:
```json
{
  "id": 1,
  "userId": 1,
  "amount": 999.99,
  "description": "Transação Testada",
  "date": "2024-06-15T00:00:00.000Z",
  "createdAt": "2024-06-14T12:00:00.000Z",
  "updatedAt": "2024-06-14T12:00:00.000Z"
}
```
## 📜 Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
