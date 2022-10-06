// Библиотеки
import express from 'express'
import cors from 'cors'

// Чистая дата
import { companiesReady } from './utils/countingCash.js'

// Настройка сервера
const port = '3333'
const app = express()

app.use(express.json())
app.use(cors())

// Роуты
app.get('/companiesReady', async (req, res) => {
	res.json(companiesReady)
})

// Работа сервера
app.listen(process.env.PORT || port, (err) => {
	if (err) console.log(`[ERROR] ${err.name}`)
	else console.log(`[STATUS] Server started at port: ${port}`)
})
