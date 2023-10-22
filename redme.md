
# Lista de Tarefas

Projeto de desenvolvimento  de uma API para gerenciamento de tarefas, com banco de dados SQLITE.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


## Autores

- [@gcarpaneze](https://github.com/gcarpaneze)


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`PORT` - Porta que será ouvida pelo fastify para criar o servidor (Ex.: 3333)

`BASE_URL` - Endereço local + nome do baco de dados (Ex.: 'db/mydb.sqlite')


## Instalação

Instale tasklist-api com npm

```bash
  cd tasklist-api

  npm install

  npm run knex -- migrate:latest

  npm run dev
```
    
## Documentação da API

#### Retorna todos os itens

```http
  GET /tasks
```

#### Salva uma tarefa no banco de dados

```http
  POST /tasks
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `title`      | `string` | **Obrigatório**. O título da tarefa a ser criado|
| `description`      | `string` | **Obrigatório**. A descrição da tarefa a ser criada|

#### Edita uma tarefa já existente no banco de dados

```http
  PUT /tasks
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `UUID` | **Obrigatório** |
| `title`      | `string` | **Obrigatório**. O título da tarefa a ser criado|
| `description`      | `string` | **Obrigatório**. A descrição da tarefa a ser criada|

#### Marca uma tarefa como concluída

```http
  PATCH /tasks/${:id}/complete
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `UUID` | **Obrigatório** |

#### Deleta uma tarefa

```http
  DELETE /tasks/${:id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `UUID` | **Obrigatório** |

