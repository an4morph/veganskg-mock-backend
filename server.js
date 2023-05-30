import express from 'express'
import cors from 'cors'
import db from './db/index.js'

const app = express()
const port = 1717

app.use(cors())

app.use(express.json()) 

app.get('/posts', (req, res) => {
  res.send(db.data.posts.map(({ id, author, createdAt, title, shortDesc }) => ({
    id, author, createdAt, title, shortDesc
  })))
})

app.get('/posts/:id', (req, res) => {
  const { id } = req.params
  const post = db.data.posts.find(p => p.id === id)
  if (!post) res.status(404).json('not found').end()
  res.send(post)
})

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))