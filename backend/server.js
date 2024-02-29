const express = require('express')
const dotenv = require('dotenv')
const { chats } = require('./data/data')

const app = express()
dotenv.config()

app.get('/', (req,res) =>{
    res.json("api is running")
})


app.get('/api/chat', (req,res) => {
    res.send(chats)
})

app.get('/api/chat/:id', (req,res) =>{
    const {id} = req.params
    const targetChat = chats.find(chat => chat._id === id)
    res.json(targetChat)
})

const PORT = process.env.PORT || 8080

app.listen(PORT,console.log(`Server running on PORT ${PORT} `))