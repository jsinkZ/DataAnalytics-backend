// Получение очищенной data
import companies from './../datasets/companies.js'
import pollResults from './../datasets/pollResults.js'
import usersCashStats from './../datasets/revenueResults.js'
import { median } from './/median.js'

// Подсчет суммы для результатов по опросам (неоф)
pollResults.forEach((item) => {
	const thisCompany = companies.find((cmp) => cmp.name === item.company)

	thisCompany.pollCashValues.push(item.cash)
	thisCompany.totalPollCash += item.cash
	thisCompany.avgPollCash = thisCompany.totalPollCash / thisCompany.pollCashValues.length
	thisCompany.medianPollCash = median(thisCompany.pollCashValues)
	thisCompany.minPollCash = Math.min(item.cash, thisCompany.minPollCash)
	thisCompany.maxPollCash = Math.max(item.cash, thisCompany.maxPollCash)
})

// Подсчет суммы для результатов по статистике (оф)
for (const [_, values] of Object.entries(usersCashStats)) {
	const thisCompany = companies.find((cmp) => cmp.id === values.companyId)

	thisCompany.revenueCashValues.push(values.cash)
	thisCompany.totalRevenueCash += values.cash
	thisCompany.avgRevenueCash = thisCompany.totalRevenueCash / thisCompany.revenueCashValues.length
	thisCompany.medianRevenueCash = median(thisCompany.revenueCashValues)
	thisCompany.minRevenueCash = Math.min(values.cash, thisCompany.minRevenueCash)
	thisCompany.maxRevenueCash = Math.max(values.cash, thisCompany.maxRevenueCash)
}

// Удаление ненужных значений из итоговой даты
companies.forEach((company) => {
	company.pollCashValues = []
	company.revenueCashValues = []
})

export const companiesReady = companies.filter((company) => company.industry === 'Зелёная энергетика')
