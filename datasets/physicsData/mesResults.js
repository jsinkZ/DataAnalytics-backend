import dataMesRes from '../../data/physicsData/dataMesRes.json' assert { type: 'json' }

const mesRes = dataMesRes['Результаты замеров']
const data = []
const gases = {}

const dates = []

mesRes.forEach((item) => {
	data.push({
		0: item.Column1,
		1: item.Column2,
		2: item.Column3,
		3: item.Column4,
		4: item['Дата замера'],
		5: item.Column6,
		6: item.Column7,
		7: item.Column8,
		8: item.Column9,
		9: item.Column10,
		10: item.Column11,
		11: item.Column12,
	})
})

Object.entries(data[0]).map((date, index) => (index >= 4 ? dates.push(date[1]) : null))

data.forEach((item, index) => {
	if (index !== 0) {
		// Создаем объект с конкретным газом
		if (gases[item[1]] == undefined) {
			gases[item[1]] = {}
			dates.map((date) => (gases[item[1]][date] = []))
		} else {
			dates.map((date) => {
				const group = []

				Object.entries(item).map((itemInObj, indexInObj) => {
					// itemInObj Категория замера и замер для каждой даты
					console.log(itemInObj[1])
					// if (indexInObj >= 3) {
					// 	group.push(itemInObj[1])
					// 	if (item[2] == 'Масса ресивера с газом, кг') {
					// 	}
					// 	console.log(item[2])
					// 	//console.log(itemInObj[1])
					// }
				})
				gases[item[1]][date].push(group)
			})
		}
	}
})

// for (const [_, values] of Object.entries(gases)) {
// 	console.log(_, values)
// }

/* 

* ПРОТОТИП

const gases = {
    gas: {
        date: [mass, temp, pressure]
        ...
    }
}

*/
