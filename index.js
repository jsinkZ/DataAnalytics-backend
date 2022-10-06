// Библиотеки
import express from 'express'
import fs from 'fs'

// Получение data
import dataCompany from './data/dataCompanyDirectory.json' assert { type: 'json' }
import dataPoll from './data/dataPollResults.json' assert { type: 'json' }
import dataRevenue from './data/dataRevenue.json' assert { type: 'json' }

// сумма для каждой компании по честному
const companies = []

dataCompany['Справочник компаний'].forEach((company) => {
	companies.push({
		id: company.id,
		name: company['Наименование'],
		industry: company['Отрасль'],
		pollCash: 0,
		revenueCash: 0,
	})
})
console.log(companies)
dataPoll['Результаты опроса о доходах'].forEach((item, i) => {
	const thisCompany = companies.filter((company) => company.name === item['Компания'])[0]
	console.log(item['Компания'])
	console.log(thisCompany.pollCash)
	thisCompany.pollCash += i
})

console.log(companies)

// const port = '3000'
// const app = express()

// app.use(express.json())

// app.get('/', (req, res) => {
// 	res.json('Yoo!')
// })

// app.listen(process.env.port || port, (err) => {
// 	if (err) console.log(`[ERROR] ${err.name}`)
// 	else console.log(`[STATUS] Server started on port: ${port}`)
// })
