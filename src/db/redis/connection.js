const {promisify} = require('util')
const redis = require("redis")

const client = redis.createClient({
  host: "127.0.0.1",
  port: 6379,
  db: 1
})

client.on("error", function (err) {
    console.log("Error " + err);
    process.exit(-1)
})

const exists = promisify(client.exists).bind(client)
const hmset = promisify(client.hmset).bind(client)
const hset = promisify(client.hset).bind(client)
const hdel = promisify(client.hdel).bind(client)
const hgetall = promisify(client.hgetall).bind(client)
const get = promisify(client.get).bind(client)
const set = promisify(client.set).bind(client)
const incr = promisify(client.incr).bind(client)

module.exports.exists = exists
module.exports.hmset = hmset
module.exports.hset = hset
module.exports.hdel = hdel
module.exports.hgetall = hgetall
module.exports.incr = incr
module.exports.get = get
module.exports.set = set