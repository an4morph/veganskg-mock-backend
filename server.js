import express from 'express'
import cors from 'cors'
import db from './db/index.js'

const app = express()
const port = 1717

app.use(cors())

app.use(express.json()) 

app.get('/posts', (req, res) => {
  res.send(db.data.posts)
})

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))