import dataCompany from './../data/dataCompanyDirectory.json' assert { type: 'json' }

const companies = []
const minCashValue = 10e10

dataCompany['Справочник компаний'].forEach((company) => {
	companies.push({
		id: company.id,
		name: company['Наименование'],
		industry: company['Отрасль'],
		pollCashValues: [],
		revenueCashValues: [],
		totalPollCash: 0,
		totalRevenueCash: 0,
		avgPollCash: 0,
		avgRevenueCash: 0,
		medianPollCash: 0,
		medianRevenueCash: 0,
		minPollCash: minCashValue,
		minRevenueCash: minCashValue,
		maxPollCash: 0,
		maxRevenueCash: 0,
	})
})

export default companies
