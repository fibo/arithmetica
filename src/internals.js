export function getBase10 (arg) {
	let [integer, mantissa] = `${arg}`.split('.')
	return mantissa == undefined ?
		[BigInt(integer), 0n] :
		[BigInt(integer + mantissa), BigInt(mantissa.length)]
}

export function base10ToStr(bigInt, denominator) {
	if (bigInt == 0) return '0'
	if (denominator == 0) return `${bigInt}`

	let bigIntStr = String(bigInt),
		bigIntLen = BigInt(bigIntStr.length)

	if (bigInt < 0n) {
		// Consider leading minus sign, for example `bigIntLen - 1n`.
		if (bigIntLen - 1n == denominator) return '-0.' + bigIntStr.slice(1)

		if (bigIntLen - 1n < denominator) return removePaddedZeros(
			'-0.'
			+ '0'.repeat(Number(denominator - bigIntLen + 1n))
			+ bigIntStr.slice(1)
		)

		return removePaddedZeros(
			'-' + bigIntStr.slice(1, Number(bigIntLen - denominator)) +
			'.' + bigIntStr.slice(Number(bigIntLen - denominator))
		)
	}

	if (bigIntLen == denominator) return '0.' + bigIntStr

	if (bigIntLen < denominator)
		return removePaddedZeros('0.' + '0'.repeat(Number(denominator - bigIntLen)) + bigIntStr)

	return removePaddedZeros(
		bigIntStr.slice(0, Number(bigIntLen - denominator))
		+ '.' +
		bigIntStr.slice(Number(bigIntLen - denominator))
	)
}

export function isValidNum(arg) {
	return typeof arg == 'number' && !isNaN(arg) && Number.isFinite(arg)
}

export function isValidStr(arg) {
	let [int, fixed, repeating] = splitStr(arg)
	try {
		if (BigInt(repeating) < 0) return false
		if (BigInt(fixed) < 0) return false
		return typeof BigInt(int) == 'bigint'
	} catch (_) { return false }
}

export function coerceToStr(arg) {
	if (isValidNum(arg) || typeof arg == 'bigint')
		return String(arg)
	if (typeof arg == 'string' && isValidStr(arg))
		return arg
	throw new TypeError('Invalid arg: ' + arg)
}

export function fractionToStr(numerator, denominator) {
	if (numerator == 0) return '0'
	let reminder = numerator % denominator, isNegative = false
	if (reminder == 0) return String(numerator / denominator)
	if (numerator > 0 && denominator < 0) {
		isNegative = true
		denominator = -denominator
	}
	if (numerator < 0) {
		numerator = -numerator
		reminder = -reminder
		if (denominator > 0) isNegative = true
		if (denominator < 0) denominator = -denominator
	}
	let integerPart = String(numerator / denominator)
	if (isNegative) integerPart = '-' + integerPart
	let digit, decimalPart = '',
		i // index of first repeating decimal
	while (true) {
		numerator = reminder * 10n
		digit = String(numerator / denominator)
		i = decimalPart.indexOf(digit)
		if (i > -1) return integerPart + '.' + decimalPart.slice(0, i) + '_' + decimalPart.slice(i)
		decimalPart += digit
		reminder = numerator % denominator
		if (reminder == 0) return integerPart + '.' + decimalPart
	}
}


export function getFraction(integer, decimalFixedPart, decimalRepeatingPart) {
	if (decimalRepeatingPart) return [
		BigInt(integer + decimalFixedPart + decimalRepeatingPart) - BigInt(integer + decimalFixedPart),
		BigInt('9'.repeat(decimalRepeatingPart.length) + '0'.repeat(decimalFixedPart.length))
	]
	if (decimalFixedPart) return [
		BigInt(integer + decimalFixedPart),
		10n ** BigInt(decimalFixedPart.length)
	]
	return [BigInt(integer), 1n]
}

export function finiteDecimal(integerA, integerB) {
	let reminder = integerA % integerB,
		numerator, decimalPart = ''

	if (reminder == 0) return String(integerA / integerB)

	while (reminder) {
		numerator = reminder * 10n
		decimalPart += String(numerator / integerB)
		reminder = numerator % integerB
	}
	return String(integerA / integerB) + '.' + decimalPart
}

export function removePaddedZeros(bigIntStr) {
	let i = bigIntStr.length - 1
	while (true) {
		if (bigIntStr.charAt(i) == '0') { i--; continue }
		break
	}
	if (i == bigIntStr.length - 1) return bigIntStr
	if (bigIntStr.charAt(i) == '.') return bigIntStr.slice(0, i)
	return bigIntStr.slice(0, i + 1)
}

export function splitStr(arg) {
	let [integer, mantissa] = arg.split('.')
	if (mantissa == undefined) return [integer, '', '']
	let [decimalFixedPart, decimalRepeatingPart] = mantissa.split('_')
	return [integer, decimalFixedPart ?? '', decimalRepeatingPart ?? '']
}
