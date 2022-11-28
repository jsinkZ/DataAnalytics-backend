const dispersion = (arr) => {
	const { length } = arr // Распаковка длины

	const sum = arr.reduce((a, b) => a + b, 0) // Сумма массива arr
	const Xavg = sum / length // Среднее значение
	const dispValues = [] // Значения для подсчета дисперсии

	arr.forEach((element) => {
		dispValues.push(Math.pow(element - Xavg, 2))
	})

	const dispSum = dispValues.reduce((a, b) => a + b, 0) // Сумма значений для подсчета дисперсии

	return dispSum / (length - 1)
}

export default dispersion
