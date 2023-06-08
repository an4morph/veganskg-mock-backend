import { Low } from 'lowdb'
import { resolve, dirname } from 'node:path'
import { JSONFile } from 'lowdb/node'
import { fileURLToPath } from 'node:url'
import posts from './posts.js'
import {user} from './users.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const adapter = new JSONFile(resolve(`${__dirname}/db.json`))

export default new Low(adapter, { posts, user })