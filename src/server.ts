import express from 'express'

import './database'

const app = express()

app.use(express.json())

import { routes } from './routes'

app.use(routes)

app.listen(3000, () => console.log('🚀 O servidor está rodando na porta 3000'))