const countMass = (P, T, Pkr, Tkr, R) => {
	const v = 0.1
	const Pavg = P / Pkr
	const Tavg = (T / Tkr) ^ -3.668
	const Z = 1 - 0.4273 * Pavg * Tavg
	const Ro = P / (Z * R * T)
	const m = v * Ro

	return m
}

export default countMass