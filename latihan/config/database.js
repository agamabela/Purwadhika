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

// db.getConnection((err, connection) => {
//     if (err) {
//         return console.error('error MySQL :', err.message)
//     }
//     console.log(`Connected to MySQL Server : ${connection.threadId}`)
// })

module.exports = { db, dbQuery }