import { Low } from 'lowdb'
import { resolve, dirname } from 'node:path'
import { JSONFile } from 'lowdb/node'
import { fileURLToPath } from 'node:url'

const jsonData = { posts: [1,3,4,4] }

const __dirname = dirname(fileURLToPath(import.meta.url))

const adapter = new JSONFile(resolve(`${__dirname}/db.json`))

export default new Low(adapter, jsonData)