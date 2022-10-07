import dataPoll from './../data/dataPollResults.json' assert { type: 'json' }

const pollResults = []

dataPoll['Результаты опроса о доходах'].forEach((item) => {
	let companyValidated = item['Компания']

	// Валидация компаний
	switch (item['Компания']) {
		case 'GREENRUS-ATOM':
			companyValidated = 'ГРИНРУС-АТОМ'
			break
		case 'ГРИНТРАНПСОРТ':
			companyValidated = 'ОАО "ГРИНТРАНПСОРТ"'
			break
		case 'ФГУБ "Салют"':
			companyValidated = 'ФГУБ "Салют-3"'
			break
		case 'ФГУБ "Салют3"':
			companyValidated = 'ФГУБ "Салют-3"'
			break
		case 'ООО "КБ-140':
			companyValidated = 'ООО "КБ-14"'
			break
		case 'ООО "КБ-140"':
			companyValidated = 'ООО "КБ-14"'
			break
		default:
			companyValidated = item['Компания']
			break
	}

	// Получение грязных данных для добавления в валидацию
	// if (companies.filter((company) => company.name === companyValidated)[0] == undefined) {
	// 	console.log(item['Компания'])
	// }

	pollResults.push({
		company: companyValidated,
		cash: item['Годовой доход после вычета налогов'],
	})
})

export default pollResults
