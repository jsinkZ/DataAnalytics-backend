// Получение очищенной data
import companies from './../datasets/companies.js'
import pollResults from './../datasets/pollResults.js'
import revenueResults from './../datasets/revenueResults.js'

import { median } from './/median.js'

// Подсчет суммы для результатов по опросам
pollResults.forEach((item) => {
	const thisCompany = companies.find((cmp) => cmp.name === item.company)

	thisCompany.pollCashValues.push(item.cash)
	thisCompany.totalPollCash += item.cash
	thisCompany.avgPollCash = thisCompany.totalPollCash / pollResults.length
	thisCompany.medianPollCash = median(thisCompany.pollCashValues)
	thisCompany.minPollCash = Math.min(item.cash, thisCompany.minPollCash)
	thisCompany.maxPollCash = Math.max(item.cash, thisCompany.maxPollCash)
})

// Подсчет суммы для результатов по инф. о доходах
revenueResults.forEach((item) => {
	const thisCompany = companies.find((cmp) => cmp.id === item.companyId)

	thisCompany.revenueCashValues.push(item.cash)
	thisCompany.totalRevenueCash += item.cash
	thisCompany.avgRevenueCash = thisCompany.totalRevenueCash / revenueResults.length
	thisCompany.medianRevenueCash = median(thisCompany.revenueCashValues)
	thisCompany.minRevenueCash = Math.min(item.cash, thisCompany.maxRevenueCash)
	thisCompany.maxRevenueCash = Math.max(item.cash, thisCompany.maxRevenueCash)
})

companies.forEach((company) => {
	company.pollCashValues = []
	company.revenueCashValues = []
})

export const companiesReady = companies.filter((company) => company.industry === 'Зелёная энергетика')
