<img src=https://david-dm.org/lucassantosjr/quick-prototype-express.svg>

#### Prerequisites:

1) Install the Redis database. It is used for save data and better performance of the application. Run the commands below for installation:

        wget http://download.redis.io/redis-stable.tar.gz
        tar xvzf redis-stable.tar.gz
        cd redis-stable
        make

2) To use the project do the download of the repository and run the command: `npm install`

#### DEVELOPMENT MODE

To run the project you must use the following command: `npm run dev`

You can pass the port. The default port is `3000`. For example:`PORT=8080 npm run dev`.

The project uses the dependecy _Nodemon_ for doing the restart of the projeto at each change in files during the development.

#### PRODUCTION MODE

To run the project you must use the following command: `npm run prod`

You can pass the port in which the server will run, the default port is `3000`. For example:`PORT=8080 npm run prod`.

The project uses the process manager _PM2_ for running the project in mode cluster and uses all the cores of SO. The environment variables `ǸODE_ENV` is set to `prod`.

#### API

`POST /register` - Register a user

Send: JSON. Format: 

    { username: your-name-here, password: 'your-password-here' }

Answer: JSON.

Error: 

    { error: true }

Success: 

    { error: false, token: 'your-token-goes-here' }

`POST /login` - Login a user

Send: JSON. Format: 

    { username: your-name-here, password: 'your-password-goes-here' }

Answer: JSON.

Error: 

    { error: true, message: 'User not found!' }

Success: 
      
    { error: false, token: 'your-token-goes-here' }

`POST /task` - Add a task

Send: JSON. 
     
    { task: Object, token: 'your-token-goes-here' }

Answer: JSON.

Error: 

    { error:true, message: 'Send the token!' }

    { error:true, message: 'Send the task!' }
                  
    { error:true, message: 'Invalid token' }
                  
                  
Success: 

    { error: false, task: 'The added task!' }

`POST /remove` - Delete a task

Send: JSON.

    { token: 'your-token-goes-here', id: int }

Erro:

    { error:true, message: 'Send the task id!' }
    
    { error:true, message: 'Send the token!' }
    
    { error: true, message: 'Invalid token!' }
    
Success: 

    { error: false, id: int }
    
    
`POST /tasks`

Send: JSON. 

    { error: false, token: 'your-token-goes-here' }

Answer: JSON.

Error: 

    { error: true, message: 'Invalid token!' }

Success: 

    [Objects]
