# Loja de Discos

Este projeto é uma aplicação web para gerenciamento e venda de discos musicais. Ela permite a administração de artistas, bandas, gêneros musicais, discos e pedidos, utilizando uma interface amigável baseada em Bootstrap.

## 📌 Funcionalidades

- **Administração de Artistas e Bandas**: Adicionar e listar artistas e bandas.
- **Gerenciamento de Discos**: Adicionar discos com detalhes como título, ano de lançamento, gênero, artista/banda, duração, estoque e imagem.
- **Pedidos**: Visualização de pedidos realizados na loja.
- **Banco de Dados**: Armazena os dados dos discos, artistas, bandas, gêneros e pedidos.
- **Interface Responsiva**: Criada utilizando Bootstrap para melhor experiência do usuário.

## 🚀 Tecnologias Utilizadas

- **Node.js**: Para o backend da aplicação.
- **Express.js**: Framework para criação de rotas e lógica do servidor.
- **MySQL**: Banco de dados relacional para armazenamento das informações.
- **Bootstrap**: Framework CSS para estilização e responsividade.

## 📂 Estrutura do Projeto

```
📁 loja-de-discos/
 ├── 📁 public/          # Arquivos estáticos (Imagens)
 ├── 📁 views/           # Templates das páginas
 ├── 📁 routes/          # Rotas da aplicação (adm.js, index.js, etc.)
 ├── 📁 utils/           # Arquivos auxiliares (conexão com o banco de dados)
 ├── 📄 app.js        # Arquivo principal do servidor
 ├── 📄 package.json     # Configuração do Node.js
 └── 📄 README.md        # Documentação do projeto
```

## 🎯 Como Rodar o Projeto

### 1️⃣ Pré-requisitos

- Node.js instalado
- MySQL configurado

### 2️⃣ Instalação das Dependências

```sh
npm install
```

### 3️⃣ Configuração do Banco de Dados

1. Importar o banco de dados SQL no XAMPP, criando um banco de dados chamado "db_lojadediscos" e importar o arquivo SQL

### 4️⃣ Iniciar o Servidor no caminho do arquivo

```sh
npm start
```

O servidor será iniciado em `http://localhost:3000`.

## 🛠 Melhorias Futuras

- Implementação de histórico de pedidos para usuários.
- Sistema de login e autenticação.
- Implementação de um carrinho de compras (comprar mais discos de uma vez, comprar em mais quantidade).

📌 Desenvolvido por Arthur Carlos, Gabriel Henrique, Igor Dias, Matheus Belchior e Pedro Lucas

