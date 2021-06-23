//API menggunakan express JS

const express = require('express')
const app = express()
const PORT = 4000
app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).send('<h1>Intro Express API</h1>')
})

app.post('/products', (req, res)=>{
    console.log(req.body)
    console.log(req.query)
})

app.delete('/products/:id', (req,res)=>{
    console.log(req.params)
})

app.listen(PORT,()=>console.log("Server running:", PORT))