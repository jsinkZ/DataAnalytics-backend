import dataGasParams from '../../data/physicsData/dataGasParamsRef.json' assert { type: 'json' }

const gasReference = []

dataGasParams['Справочник параметров газа'].forEach((item) => {
	gasReference.push({
		id: item.id,
		name: item['Наименование'],
		Pkr: (item['Критическое давление Pkr, МПа'] * 10) ^ 6,
		Tkr: item['Критическая температура Tkr, К'],
		R: item['Газовая постоянная'],
	})
})

export default gasReference
