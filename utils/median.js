const median = (arr) => {
	const { length } = arr // Распаковка длины

	arr.sort((a, b) => a - b)

	if (length % 2 === 0) return (arr[length / 2 - 1] + arr[length / 2]) / 2
	return arr[(length - 1) / 2]
}

export default median
