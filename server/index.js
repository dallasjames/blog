const express = require('express')
const cors = require('cors')
// const morgan = require('morgan')
const postRouter = require('./src/posts/posts-router')

const server = express()
server.use(express.json())
server.use(cors({orgin: true, credentials: true}))
// server.use(morgan)

server.get('/', (req, res) => {
    res.status(200).json({message: "Get out"})
})

server.use('/posts', postRouter)

server.all('*', (req, res) => {
    res.status(404).json({message: "not found"})
})

const port = process.env.PORT || 5000

server.listen(port, console.log(`Port: ${port}`))