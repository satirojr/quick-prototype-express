# express-lokijs-projeto

## Projeto para cadastro e acesso de usuários feito em NodeJS utilizando a framework Express e o banco de dados em memória LokiJS

### Esse é um projeto cujo propósito é servir de baseline para protótipos

Para o utilização do projeto faça o clone do repositório.

e então execute o comando:

`npm install`

Para rodar o projeto em modo dev utilize o seguinte comando:

`npm run dev`

Você pode passar a porta em qual o servidor vai rodar, a porta default é a `3000`:

`PORT=8080 npm run dev`(exemplo)

O projeto utiliza o Nodemon para fazer o restart do projeto em cada mudança de arquivo em modo dev.

Para rodar o projeto em modo prod utilize o seguinte comando:

`npm run prod`

O modo prod utiliza o gerenciador de processo PM2 para roda em modo cluster e utilizar todos os cores do SO.

## Rotas

As rotas definidas para o método GET devem ser customizadas para retornarem o tipo de conteúdo desejado.

`GET /login` - se o usuário já estiver logado ele será redirecionado para a rota `/profile` automaticamente.

`POST /login` - o server espera que sejam enviados dois parâmetros: `username` e `password` em formato JSON, envie com o cabeçalho `Content-Type: application/json`. Caso seja realizado com sucesso o servidor retorna um Cookie com o id da sessão do usuário que será mandado para as próximas requisições e redireciona para `/profile`.

`GET /register` - se o usuário já estiver logado ele será redirecionado para a rota `/profile` automaticamente.

`POST /register` - o server espera que sejam enviados dois parâmetros: `username` e `password` em formato JSON, envie com o cabeçalho `Content-Type: application/json`. O servidor retorna um Cookie com o id da sessão do usuário que será mandado para as próximas requisições. Se o cadastro for realizado com sucesso o usuário será redirecionado para `/profile`.

`GET /profile` - se o usuário não estiver logado ele será redirecionado para `/login`.

`GET /logout` - a sessão será destruida e o usuário será redirecionado para `/login`.
