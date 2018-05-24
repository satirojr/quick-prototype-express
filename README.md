# quick-prototype-express

#### API
POST /register

Envie: JSON. Format: 

    { username: your-name-here, password: your-password-here }

Resposta: JSON.

Em caso de erro: 

    { error: true }

Em sucesso: 

    { error: false, token: 'your-token-here' }

POST /login

Send: JSON. Format: 

    { username: your-name-here, password: your-password-here }

Resposta: JSON.

Em caso de erro: 

    { error: true }

Em sucesso: 
      
    { error: false, token: 'your-token-here' }

POST /task

Envie: JSON. 
     
    { task: Object, token: 'your-token-here' }

Resposta: JSON.

Em caso de error: 

    {error:true, message: 'Send the token!'}

    {error:true, message: 'Send the task!'}
                  
    {error:true, message: 'Token inválido'}
                  
                  
Em sucesso: 

    {error: false, task: req.body.task}

POST /tasks

Envie: JSON. 

    { token: 'your-token-here' }

Resposta: JSON.

Em caso de erro: 

    {error: true, message: 'token inválido!'}

Em caso de sucesso: 

    [Objects]


##### Pré-requisitos:

1) Instale o banco de dados in-memory Redis. Ele é utilizado para gerenciamento de sessão da aplicação. Execute os comandos abaixo para a instalação.

        wget http://download.redis.io/redis-stable.tar.gz
        tar xvzf redis-stable.tar.gz
        cd redis-stable
        make

2) Para o utilização do projeto faça o clone do repositório e execute o comando: `npm install`

#### DEVELOPMENT MODE

Para executar o projeto em modo desenvolvimento utilize o seguinte comando: `npm run dev`

Você pode passar a porta em qual o servidor vai rodar, a porta default é a `3000`. Por exemplo:`PORT=8080 npm run dev`.

O projeto utiliza a dependência do  _Nodemon_ para fazer o restart do projeto em cada mudança de arquivo em modo desenvolvimento.

#### PRODUCTION MODE

Para rodar o projeto em modo produção utilize o seguinte comando: `npm run prod`

Você pode passar a porta em qual o servidor vai rodar, a porta default é a `3000`. Por exemplo:`PORT=8080 npm run prod`.

O modo produção utiliza o gerenciador de processos _PM2_ para executar projeto em modo cluster e utilizar todos os núcleos do sistema operacional. A variável de ambiente `ǸODE_ENV` está definida como `prod`.

## Rotas

Note que você pode e deve customizar o conteúdo que as rotas retornam, principalmente as que utilizam o método `GET`.

`GET /login` - se o usuário já estiver logado ele será redirecionado para a rota `/profile` automaticamente.

`POST /login` - o server espera que sejam enviados dois parâmetros: `username` e `password` em formato JSON, envie com o cabeçalho `Content-Type: application/json`. Caso seja realizado com sucesso o servidor retorna um Cookie com o id da sessão do usuário que será mandado para as próximas requisições e redireciona para `/profile`.

`GET /register` - se o usuário já estiver logado ele será redirecionado para a rota `/profile` automaticamente.

`POST /register` - o server espera que sejam enviados dois parâmetros: `username` e `password` em formato JSON, envie com o cabeçalho `Content-Type: application/json`. O servidor retorna um Cookie com o id da sessão do usuário que será mandado para as próximas requisições. Se o cadastro for realizado com sucesso o usuário será redirecionado para `/profile`.

`GET /profile` - se o usuário não estiver logado ele será redirecionado para `/login`.

`GET /logout` - a sessão será destruida e o usuário será redirecionado para `/login`.
