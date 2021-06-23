const mysql = require('mysql')
const util = require('util')

const db = mysql.createPool({
    host: 'localhost',
    user: 'belasql',
    password: 'Sumber667@',
    database: 'latihan',
    port: 3306,
    multipleStatements: true
})

const dbQuery = util.promisify(db.query).bind(db)

module.exports={ db, dbQuery }