# RoadDev

API feita para gerenciar redes de escolas, gerando o fluxo de inserção de estudantes e professores, autenticação dos mesmos, atualização de dados além da montagem do cronograma das aulas.
A API também conta com uma integração externa com a API PrismaOne, onde para criarmos um estudante, precisamos encontrar uma matrícula válida no banco de dados da PrismaOne.


# Sumário
1. <a href="#Hosted-APP">Hosted APP</a>
2. <a href="#Documentação-da-RoadDev">Documentação da RoadDev</a>
3. <a href="#Tecnologias-utilizadas">Tecnologias Utilizadas</a>
4. <a href="#Inicializando">Inicializando</a>
5. <a href="#Configurando-o-Projeto">Configurando o Projeto</a>
6. <a href="#Gerando-e-Rodando-Migrations-(TypeORM)">Gerando e Rodando Migrations (TypeORM)</a>
7. <a href="#Rodando-Testes">Rodando Testes</a>
8. <a href="#Deploy">Deploy</a>
9. <a href="#CI/CD">CI/CD</a>
10. <a href="#API-Endpoints">API Endpoints</a>
11. <a href="#Autor">Autor</a>

## Hosted APP

https://mtg-trading-api.herokuapp.com/

## Documentação da MTG Trading API

https://mtg-trading-api.herokuapp.com/api-docs/

## Tecnologias Utilizadas

- [NodeJS](https://nodejs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/)
- [Postgres](https://www.postgresql.org/)
- [Jest](https://jestjs.io/)
- [Supertest]()


## Inicializando

- Clonar o repositório: `git clone https://github.com/vianagustavo/roaddev.git`
- Rodar `yarn --frozen-lockfile`
- Setar as variáveis de ambiente no .env (conforme próximo passo)

## Configurando o Projeto

Setar variáveis de ambiente de acordo

|     Variável    |      Default     |          Notes           |
| --------------- | ---------------- | ------------------------ |
|  `DB_DATABASE`  | `roaddev-tests`  |       Nome do Banco      |
|    `DB_HOST`    |    `localhost`   |       Host do Banco      |
|  `DB_USERNAME`  |      `root`      |     Username do Banco    |
|  `DB_PASSWORD`  |      `admin`     |      Senha do Banco      |
|     `PORT`      |      `4800`      |  Porta de inicialização  |
|  `ENVIRONMENT`  |      `local`     |   Variável de Ambiente   |
|  `USER_SECRET`  |                  |  Secret - Token Usuário  |
| `STUDENT_SECRET`|                  | Secret - Token Estudantes|


## Gerando e Implementando Migrations (TypeORM)

Para adicionar/alterar migrations no model execute:

```
# Gerando e implementando Migrations
$ yarn prisma migrate dev

```

## Rodando Testes

Com intuito de relizar testes automatizados, foram realizados testes unitários que estão disponíveis para todos os services da aplicação, e o script utilizado para o rodar o Jest pode ser encontrado no `package.json`.


```
# Rodando os testes
$ yarn test

```


## CI/CD

Aproveitando a iniciativa de utilizar o deploy na plataforma do Heroku, também foram utilizados os conceitos de CI/CD, através do GitHub Actions, sempre que for feito um push ou pull-request para a branch main, adotando boas práticas de desenvolvimento e automação da implantação da nossa aplicação.

O workflow completo se encontra em: ``` .github/workflows/full-workflow.yml ```

## API Endpoints

|  Verbo   |                    Endpoint                     |                 Descrição                  |     Acessível à:      |
| :------- | :---------------------------------------------: | :----------------------------------------: | :-------------------: |
| `POST`   |                     `/user`                     |         Criação de novo usuário            |       ---------       |
| `POST`   |                    `/login/user`                |         Autenticação de usuário            |       ---------       |
| `POST`   |                   `/create-listing`             |       Criação de listagem de carta         |        Usuário        |
| `GET`    |                    `/listing`                   |   Leitura de todas listagens por usuário   |        Usuário        |
| `GET`    |                   `/listing/:name`              | Leitura de listagens filtrando por nome    |        Usuário        |
| `PATCH`  |                   `/listing/:id`                |   Atualização de preço e/ou quantidade     |        Usuário        |
| `DELETE` |                   `/listing/:id`                |           Deletar uma listagem ativa       |        Usuário        |


## Autor

- **Gustavo Ferreira Viana**