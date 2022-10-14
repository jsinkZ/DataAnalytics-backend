import dataMesRes from '../../data/physicsData/dataMesRes.json' assert { type: 'json' }
import countMass from '../../utils/countMass.js'
import gasReference from './gasReference.js'
import noises from './sensNoise.js'

const mesRes = dataMesRes['Результаты замеров']
const data = []

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

const dates = []
const gases = {
	Пропан: {},
	Азот: {},
}

const pressureP = data[1]
const tempP = data[2]
const massP = data[3]
const pressureA = data[4]
const tempA = data[5]
const massA = data[6]

Object.entries(data[0]).map((date, index) => (index >= 4 ? dates.push(date[1]) : null))

let currentIndex = 4
let noiseIndex = 0
dates.forEach((date) => {
	const noiseTempP = noises['1'][date][0]
	const noisePresP = noises['1'][date][1]
	const noiseTempA = noises['2'][date][0]
	const noisePresA = noises['2'][date][1]

	const readyTempP = tempP[currentIndex] - noiseTempP
	const readyPresP = pressureP[currentIndex] * 10e6 - noisePresP
	const readyTempA = tempA[currentIndex] - noiseTempA
	const readyPresA = pressureA[currentIndex] * 10e6 - noisePresA

	gases['Пропан'][date] = [
		massP[currentIndex] - massP[3],
		readyTempP,
		readyPresP,
		countMass(readyPresP, readyTempP, gasReference[0].Pkr, gasReference[0].Tkr, gasReference[0].R),
	] // id 1
	gases['Азот'][date] = [
		massA[currentIndex] - massA[3],
		readyTempA,
		readyPresA,
		countMass(readyPresA, readyTempA, gasReference[1].Pkr, gasReference[1].Tkr, gasReference[1].R),
	] // id 2
	currentIndex++
	noiseIndex++
})

export default gases

console.log(gases)
console.log(gasReference[1].Pkr)
/* 

* ПРОТОТИП

const gases = {
    gas: {
        date: [mass, temp, pressure, massByCalc]
        ...
    }
}

*/
