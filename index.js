// Библиотеки
import express from 'express'

// Чистая дата
import { companiesReady } from './utils/countingCash.js'

// Настройка сервера
const port = '3000'
const app = express()

app.use(express.json())

// Роуты
app.get('/companiesReady', (req, res) => {
	res.json(companiesReady)
})

// Работа сервера
app.listen(process.env.port || port, (err) => {
	if (err) console.log(`[ERROR] ${err.name}`)
	else console.log(`[STATUS] Server started at port: ${port}`)
})
