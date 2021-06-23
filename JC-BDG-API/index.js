const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT||2000

app.use(cors())

app.get('/',(req,res)=>{
    res.status(200).send("<h2>Coba JC</h2>")
})

app.listen(PORT,()=>console.log('Berhasil running!', PORT))