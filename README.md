<p align="center">
  <img width="460" height="300" src="https://1000logos.net/wp-content/uploads/2020/11/Magic-The-Gathering-Logo-500x313.png">
</p>


# MTG Trading API

A API MTG Trading API foi feita com o intuito de possibilitar jogadores e colecionadores de Magic: The Gathering a listagem de suas cartas.

Na franquia, as cartas possuem diversas características e todas são levadas em consideração nas listagens. O jogador/colecionador pode adicionar uma nova carta, ler suas cartas listadas, procurar por um nome específico destre suas listagens, atualizar e/ou deletar uma listagem.

Para isso, toda e qualquer lista de cartas é organizada em ordem decrescente. 

Como cada jogador só pode ter acesso às próprias cartas que inseriu, foi utilizado um index no campo ownerId do nosso banco dedos, acelerando o tempo de resposta, tendo em vista que para todas as rotas é necessária uma autenticação do jogador via ownerId.


# Sumário
1. <a href="#Hosted-APP">Hosted APP</a>
2. <a href="#Documentação-MTG-Tading-API">Documentação da MTG Trading API</a>
3. <a href="#Tecnologias-Utilizadas">Tecnologias Utilizadas</a>
4. <a href="#Inicializando">Inicializando</a>
5. <a href="#Configurando-o-Projeto">Configurando o Projeto</a>
6. <a href="#Gerando-e-Implementando-Migrations-(Prisma)">Gerando e Implementando Migrations (Prisma)</a>
7. <a href="#Rodando-Testes">Rodando Testes</a>
8. <a href="#CI/CD">CI/CD</a>
9. <a href="#API-Endpoints">API Endpoints</a>
10. <a href="#Autor">Autor</a>

## Hosted APP

https://mtg-trading-api.herokuapp.com/

## Documentação MTG Trading API

https://mtg-trading-api.herokuapp.com/api-docs/

## Tecnologias Utilizadas

- [NodeJS](https://nodejs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Prisma](https://typeorm.io/)
- [Postgres](https://www.prisma.io/)
- [Jest](https://jestjs.io/)


## Inicializando

- Clonar o repositório: `git clone https://github.com/vianagustavo/roaddev.git`
- Rodar `yarn --frozen-lockfile`
- Setar as variáveis de ambiente no .env (conforme próximo passo)

## Configurando o Projeto

Setar variáveis de ambiente de acordo

|        Variável      |      Default     |              Notes             |
| -------------------- | ---------------- | ------------------------------ |
|     `DB_DATABASE`    |`mtg-trading-api` |          Nome do Banco         |
|    `POSTGRES_USER`   |      `root`      |        Username do Banco       |
|  `POSTGRES_PASSWORD` |      `admin`     |          Senha do Banco        |
|        `PORT`        |      `7777`      |     Porta de inicialização     |
|     `DATABASE_URL`   |   `PRISMA URL`   |  URL de conexão com o Postgres |
|     `USER_SECRET`    |                  |      Secret - Token Usuário    |


## Gerando e Implementando Migrations (Prisma)

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

O workflow completo pode ser encontrado em: 

``` .github/workflows/full-workflow.yml ```

## API Endpoints

|  Verbo   |                    Endpoint                     |                 Descrição                  |     Acessível à:      |
| :------- | :---------------------------------------------: | :----------------------------------------: | :-------------------: |
| `POST`   |                     `/user`                     |         Criação de novo usuário            |       ---------       |
| `POST`   |                    `/login/user`                |         Autenticação de usuário            |       ---------       |
| `POST`   |                    `/listing`                   |       Criação de listagem de carta         |        Usuário        |
| `GET`    |                    `/listing`                   |   Leitura de todas listagens por usuário   |        Usuário        |
| `GET`    |                   `/listing/:name`              | Leitura de listagens filtrando por nome    |        Usuário        |
| `PATCH`  |                   `/listing/:id`                |   Atualização de preço e/ou quantidade     |        Usuário        |
| `DELETE` |                   `/listing/:id`                |           Deletar uma listagem ativa       |        Usuário        |


## Autor

- **Gustavo Ferreira Viana**