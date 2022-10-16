const dispersion = (arr) => {
	const { length } = arr

	const sum = arr.reduce((a, b) => a + b, 0)
	const Xavg = sum / length
	const dispValues = []
	arr.forEach((element) => {
		dispValues.push(Math.pow(element - Xavg, 2))
	})
	const dispSum = dispValues.reduce((a, b) => a + b, 0)

	return dispSum / (length - 1)
}

export default dispersion
