import dataMesRes from '../../data/physicsData/dataMesRes.json' assert { type: 'json' }
import countMass from '../../utils/countMass.js'
import dispersion from '../../utils/dispersion.js'
import gasReference from './gasReference.js'
import noises from './sensNoise.js'

const data = []

// * "Чистка" данных
dataMesRes['Результаты замеров'].forEach((item) => {
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

const pressureP = data[1]
const tempP = data[2]
const massP = data[3]
const pressureA = data[4]
const tempA = data[5]
const massA = data[6]

const dates = [] // Массив с датами
Object.entries(data[0]).map((date, index) => (index >= 4 ? dates.push(date[1]) : null))

// * Итоговый объект с газами
export const gases = {
	Пропан: {},
	Азот: {},
}

// * Итоговый объект с дисперсиями
export const dispersions = {
	Пропан: {},
	Азот: {},
}

// * Значения для дисперсий
const readyPressuresP = []
const readyTempsP = []
const readyMassesP = []

const readyPressuresA = []
const readyTempsA = []
const readyMassesA = []

// * Подсчет для каждой даты
let currentIndex = 4 // Смещение по индексу в массиве (до этого значение неподходящие знач)
dates.forEach((date) => {
	// * Пропан
	const noiseTempP = noises['1'][date][0]
	const noisePresP = noises['1'][date][1]

	const readyTempP = tempP[currentIndex] - noiseTempP
	const readyPressureP = pressureP[currentIndex] * 10e5 - noisePresP
	const readyMassP = massP[currentIndex] - massP[3]
	const readyMassCalcP = countMass(
		readyPressureP,
		readyTempP,
		gasReference[0].Pkr,
		gasReference[0].Tkr,
		gasReference[0].R
	)

	gases['Пропан'][date] = [
		readyTempP,
		readyPressureP,
		[readyMassP, readyMassCalcP],
		[Math.abs(readyMassP - readyMassCalcP), Math.abs(100 - (readyMassCalcP / readyMassP) * 100)],
	] // id 1

	// Общие массивы по значениям
	readyPressuresP.push(readyPressureP)
	readyTempsP.push(readyTempP)
	readyMassesP.push(readyMassP)

	// * Азот
	const noiseTempA = noises['2'][date][0]
	const noisePresA = noises['2'][date][1]

	const readyTempA = tempA[currentIndex] - noiseTempA
	const readyPressureA = pressureA[currentIndex] * 10e5 - noisePresA
	const readyMassA = massA[currentIndex] - massA[3]
	const readyMassCalcA = countMass(
		readyPressureA,
		readyTempA,
		gasReference[1].Pkr,
		gasReference[1].Tkr,
		gasReference[1].R
	)

	gases['Азот'][date] = [
		readyTempA,
		readyPressureA,
		[readyMassA, readyMassCalcA],
		[Math.abs(readyMassA - readyMassCalcA), Math.abs(100 - (readyMassCalcA / readyMassA) * 100)],
	] // id 2

	// Общие массивы по значениям
	readyPressuresA.push(readyPressureA)
	readyTempsA.push(readyTempA)
	readyMassesA.push(readyMassA)

	currentIndex++
})

dispersions['Пропан'].disp = [dispersion(readyTempsP), dispersion(readyPressuresP), dispersion(readyMassesP)]
dispersions['Пропан'].var = [
	Math.sqrt(dispersion(readyTempsP)),
	Math.sqrt(dispersion(readyPressuresP)),
	Math.sqrt(dispersion(readyMassesP)),
]

dispersions['Азот'].disp = [dispersion(readyTempsA), dispersion(readyPressuresA), dispersion(readyMassesA)]
dispersions['Азот'].var = [
	Math.sqrt(dispersion(readyTempsA)),
	Math.sqrt(dispersion(readyPressuresA)),
	Math.sqrt(dispersion(readyMassesA)),
]

/* 

* ПРОТОТИП

const gases = {
    gas: {
        date: [temp, pressure, массивМасс[mass, massByCalc], массивРазностиМасс[absMass, percentMass]]
        ...
    }
}

const dispersions = {
	gas: [despTemp, despPressure, despMass],
}

*/
