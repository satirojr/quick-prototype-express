# quick-prototype-express

#### API
POST /register

Envie: JSON. Format: 

    { username: your-name-here, password: 'your-password-here' }

Resposta: JSON.

Em caso de erro: 

    { error: true }

Em sucesso: 

    { error: false, token: 'your-token-goes-here' }

POST /login

Send: JSON. Format: 

    { username: your-name-here, password: 'your-password-goes-here' }

Resposta: JSON.

Em caso de erro: 

    { error: true }

Em sucesso: 
      
    { error: false, token: 'your-token-goes-here' }

POST /task

Envie: JSON. 
     
    { task: Object, token: 'your-token-goes-here' }

Resposta: JSON.

Em caso de error: 

    { error:true, message: 'Send the token!' }

    { error:true, message: 'Send the task!' }
                  
    { error:true, message: 'Invalid token' }
                  
                  
Em sucesso: 

    { error: false, task: 'The added task!' }

POST /tasks

Envie: JSON. 

    { error: false, token: 'your-token-goes-here' }

Resposta: JSON.

Em caso de erro: 

    { error: true, message: 'Invalid token!' }

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
