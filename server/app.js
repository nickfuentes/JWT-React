const express = require("express")
const app = express()
let jwt = require('jsonwebtoken')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const users = [{username: 'johndoe', password: 'password'}]

app.get('/api/add-books', (req, res) => {
    res.json({message: 'Books added..'})
})

app.get('/api/my-books', (req, res) => {
    res.json([{title: 'Atomic Habits'}])
})

app.post('/login', (req, res) => {

    const username = req.body.username
    const password = req.body.password

    let persistedUser = users.find(u => u.username == username && u.password == password)

    if(persistedUser) {

        let token = jwt.sign({username: username}, 'someprivatekey')
        res.json({token: token})
    } else {
        res.status(401).json({error: 'Invalid credentials'})
    }
})




app.listen(3001, ()=> {
    console.log('Server is running....')
})