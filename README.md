# e2e CRUD contacts

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Dividido o CRUD em dois sistemas

1- Servidor feito em Python utilizando FlaskApi e SQLAlchemy como ORM para persistir no MySQL

2- Um Single Page Application (SPA) feito em React

## Briefing

### Flask (1):

- Utilizei este framework em Pythom para construir a camanda de serviço do CRUD. Nele utilizei serializações, migrações e modelos de dados para facilitar a manipulação dos dados. 4 rotas foram criadas:
- GET /users
- POST /user
- PUT /user/id
- DELETE /user/id

### Client (2):

- Usei ReactJs como um framework web, styled-components para estilizar os componentes do zero. Usei a metodologia do Atomic Design como um system pattern. Decidi não usar nenhum framework CSS para obter um resultado mais enxuto e rápido, mas não consegui criar uma capacidade de resposta para dispositivos móveis em tempo hábil. Também optei por não usar o Redux como gerenciador de estado porque neste caso estou pegando dados de uma única API.

## Setup!

necessário:

- npm
- node
- pip ou pip3
- pipenv

### Serviço (Porta 5000)

- export FLASK_APP=app
- export FLASK_ENV=Development
- export FLASK_DEBUG=True

- `flask run` pra rodar

#### Rodar migração

- flask db init
- flask db migrate
- flask db upgrade

### SPA (Porta 3000)

- `npm install` pra instalar as dependencias
- `npm run start` pra rodar o client
