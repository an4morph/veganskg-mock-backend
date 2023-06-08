import express from 'express'
import cors from 'cors'
import db from './db/index.js'

const app = express()
const port = 1717

app.use(cors())

app.use(express.json()) 

const mapLessPosts = ({ id, author, createdAt, title, shortDesc }) => ({
  id, author, createdAt, title, shortDesc
})
const filterByQuery = (query) => ({ title, shortDesc }) => {
  return title.includes(query) || shortDesc.includes(query)
}

app.get('/posts', (req, res) => {
  if (!req.query || JSON.stringify(req.query) === '{}') {
    res.send(db.data.posts.map(mapLessPosts))
    return
  }
  const data = db.data.posts
    .filter(filterByQuery(req.query.query))
    .map(mapLessPosts)
  res.send(data)
})

app.get('/posts/:id', (req, res) => {
  const { id } = req.params
  const post = db.data.posts.find(p => p.id === id)
  if (!post) res.status(404).json('not found').end()
  res.send(post)
})

app.get('/user/:id', (req, res) => {
  res.send(db.data.user)
})

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))