import dataSensNoise from '../../data/physicsData/dataSensNoise.json' assert { type: 'json' }

const sensNoise = dataSensNoise['Шум с датчиков']
const data = []
const dates = []

sensNoise.forEach((item) => {
	data.push({
		0: item['Дата замера'],
		1: item.Column5,
		2: item.Column6,
		3: item.Column7,
		4: item.Column8,
		5: item.Column9,
		6: item.Column10,
		7: item.Column11,
	})
})

Object.entries(data[0]).map((date) => dates.push(date[1]))

const noises = {
	1: {},
	2: {},
}

const pressureP = data[1]
const tempP = data[2]
const pressureA = data[3]
const tempA = data[4]

let currentIndex = 0
dates.forEach((date) => {
	noises['1'][date] = [tempP[currentIndex], pressureP[currentIndex] * 10e6]
	noises['2'][date] = [tempA[currentIndex], pressureA[currentIndex] * 10e6]
	currentIndex++
})

export default noises
