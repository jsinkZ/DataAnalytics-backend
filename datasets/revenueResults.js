import dataRevenue from './../data/dataRevenue.json' assert { type: 'json' }

const usersCashStats = {}

dataRevenue['Информация о доходах'].forEach((item) => {
	const calculatedCash =
		item['Сумма оклада за период (до вычета налогов)'] * (1 - item['Величина налога,%'] * 0.01)

	if (usersCashStats[item['id-сотрудника']] === undefined) {
		usersCashStats[item['id-сотрудника']] = {
			cash: calculatedCash,
			companyId: item['id-компании'],
		}
	} else usersCashStats[item['id-сотрудника']].cash += calculatedCash
})

export default usersCashStats
