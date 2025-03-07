# CEPAR DISCOS - Loja de Discos

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
 ├── 📄 package.json     # Configuração do Node.js (Express)
 └── 📄 packpage-lock.json  # Dependencia do Express
 └── 📄 README.md        # Documentação do projeto
```
# Banco de dados (db_lojadediscos)

# O banco de dados é composto pelas seguintes tabelas e relacionamentos:

# tbartista (Artistas)
```
artista_id (PK) - Identificador único do artista.
nome - Nome do artista.
banda_id (FK) - Relacionamento opcional com tbbanda.
```

# tbbanda (Bandas)
```
banda_id (PK) - Identificador único da banda.
nome - Nome da banda.
tbbanda_artista (Relacionamento Banda-Artista)
banda_id (FK) - Relacionamento com tbbanda.
artista_id (FK) - Relacionamento com tbartista.
```
# tbdisco (Discos)
```
disco_id (PK) - Identificador único do disco.
titulo - Título do disco.
artista_id (FK) - Relacionamento com tbartista.
genero_id (FK) - Relacionamento com tbgenero.
preco - Preço do disco.
estoque - Quantidade disponível em estoque.
imagem - URL da imagem do disco.
tbgenero (Gêneros Musicais)
genero_id (PK) - Identificador único do gênero.
nome - Nome do gênero musical.
```
# tbpedido (Pedidos)
```
pedido_id (PK) - Identificador único do pedido.
data_pedido - Data em que o pedido foi realizado.
total - Valor total do pedido.
tbitens_pedido (Itens do Pedido)
item_id (PK) - Identificador único do item do pedido.
pedido_id (FK) - Relacionamento com tbpedido.
disco_id (FK) - Relacionamento com tbdisco.
quantidade - Quantidade de discos no pedido.
preco_unitario - Preço unitário do disco no momento da compra.
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

