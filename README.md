<h1 align="center">👨‍💻 Projeto PostgreSQL e React Native 👨‍💻</h1>

## Contexto

Pequeno projeto para colocar em pratica o conhecimento com PostGresSQL e React Native. Foi usado para backend Node.JS, Express e Prisma.

##Resultado

- ### Requisitos
Ter instalado as seguintes ferramentas
- [Node.js](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
- [Git](https://git-scm.com/downloads)

##  Instalação

1. Clone o projeto
```shell
    git clone https://github.com/Mathias5g/postgres-api.git
```

3. Acesse cada stack do projeto
```shell
    cd backend
    cd frontend
```

3. Baixe os pacotes npm em suas respectivas stack
```shell
    yarn install 
```

## Como rodar
1. Alterar as linhas a seguir para o seu
   ambiente de banco de dados
```dotenv
SERVER_PORT=
DATABASE_
```

2. Rodar a migration para gerar as tebelas utilziando o seguinte comando
```shell
  yarn prisma migrate dev
```

3. Rodar o servidor localmente utilizando o seguinte comando
```shell
  yarn dev
```

4. Rodar o aplicativo localmente utilizando o seguinte comando
```shell
  yarn android
  yarn ios
```


## Bibliotecas utilizadas
Lista completa em ``package.json``

<p align="center">👨‍💻 Never Stop Learning 👨‍💻</p>
