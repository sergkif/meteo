
const url = require('url')
const MongoClient = require('mongodb').MongoClient

let cachedDb = null

module.exports = async function connectToDatabase(uri) {
  if (cachedDb) {
    return cachedDb
  }
  const client = await MongoClient.connect(uri, { useNewUrlParser: true })
  cachedDb = await client.db(url.parse(uri).pathname.substr(1))
  return cachedDb
}
