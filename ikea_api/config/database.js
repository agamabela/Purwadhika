const mysql = require('mysql')
const util = require('util')

const db = mysql.createPool({
    host: process.env.HOSTSQL,
    user: process.env.USERSQL,
    password: process.env.PASSWORD,
    database: process.env.DBSQL,
    port: process.env.PORTSQL,
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