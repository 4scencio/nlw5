import express from 'express'

import './database'

const app = express()

app.use(express.json())

app.get('/', (request, response) => {
    return response.json({
        message: 'Olá #NLW5 :D'
    })
})

app.post('/msg', async (request, response) => {
    const { message } = await request.body

    return response.json({ message })
})

app.listen(3000, () => console.log('🚀 O servidor está rodando na porta 3000'))