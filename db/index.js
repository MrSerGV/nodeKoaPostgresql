const { Pool } = require('pg')

const pool = new Pool({
        host: 'localhost',
        user: 'candidate2',
        database: 'candidate2db',
        password: 'qBHNscz6',
        max: 20,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000,
})

pool.connect((err, client, release) => {
        if (err) {
          return console.error('Error acquiring client', err.stack)
        }
        client.query('SELECT NOW()', (err, result) => {
          release()
          if (err) {
            return console.error('Error executing query', err.stack)
          }
          console.log(result.rows)
        })
})

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  }
}
