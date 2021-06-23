//password 2FA gmail : affziwvmkdruzqhc
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'agamabela@gmail.com',
        pass: 'vtiijmkdmnhiodoa'
    },
    tls: {
        rejectUnauthorized: false
    }
})

module.exports = { transporter }