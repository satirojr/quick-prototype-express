if (process.env.NODE_ENV === 'dev') {
    return require('./loki/users')
}

if (process.env.NODE_ENV === 'prod') {
    // should implement the database for production environment
    return
}
