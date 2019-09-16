const express = require("express")
const app = express()
let jwt = require('jsonwebtoken')
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/api/add-books', (req, res) => {
    res.json({message: 'Books added..'})
})

app.get('/api/my-books', (req, res) => {
    res.json([{title: 'Atomic Habits'}])
})






app.listen(3001, ()=> {
    console.log('Server is running....')
})