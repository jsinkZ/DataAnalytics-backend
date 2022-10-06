import dataRevenue from './../data/dataRevenue.json' assert { type: 'json' }

const revenueResults = []

dataRevenue['Информация о доходах'].forEach((item) => {
	const calculatedCash =
		item['Сумма оклада за период (до вычета налогов)'] * (1 - item['Величина налога,%'] * 0.01)

	revenueResults.push({
		companyId: item['id-компании'],
		cash: calculatedCash,
	})
})

export default revenueResults
