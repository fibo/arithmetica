export function isFloat (arg) {
	if (typeof arg == 'number' && !isNaN(arg) && Number.isFinite(arg)) return true
	if (typeof arg == 'bigint') return true
	if (typeof arg != 'string') return false

	let letter, hasDecimalSeparator = false

	for (let i = 0; i < arg.length; i++) {
		letter = arg.charAt(i)
		if (i == 0 && letter == '-') continue; // Can start with a minus sign.
		if (letter == '.') {
			if (hasDecimalSeparator) return false; // Cannot have more than one decimal separator.
			if (i == arg.length - 1) return false; // Cannot end with a decimal separator.
			hasDecimalSeparator = true
			continue
		}
		if ('0123456789'.includes(letter)) continue
		return false
	}

	let firstLetter = arg.charAt(0),
		secondLetter = arg.charAt(1),
		thirdLetter = arg.charAt(2)
	// Cannot have right padded zeros.
	if (firstLetter == '0' && secondLetter == '0') return false
	if (firstLetter == '-' && secondLetter == '0' && thirdLetter == '0') return false
	// It must have a number after minus sign.
	if (firstLetter == '-' && secondLetter == '.') return false
	// It cannot be `-0`.
	if (firstLetter == '-' && secondLetter == '0' && thirdLetter == '') return false
	return true
}

export function base10FractionToFloat(bigInt, denominator) {
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

export function quotientToFloat(integerA, integerB) {
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

export function base10Fraction (arg) {
	let [integer, mantissa] = `${arg}`.split('.')
	return mantissa == undefined ?
		[BigInt(integer), 0n] :
		[BigInt(integer + mantissa), BigInt(mantissa.length)]
}

  // Remove right padded zeros from non repeating decimals.
 // This function is used only for numbers with mantissa.
// Cases when `bigIntStr` is `'0'` or any other integer are not handled.
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

 // Operators
////////////

export function eq(a, b) { return (a == b) || sub(a, b) == 0 }

export function neg (a) {
	if (typeof a != 'string') return a ? -a : a
	if (a == 0) return a
	if (a.charAt(0) == '-') return a.slice(1)
	return '-' + a
}

export function inv(a) { return div(1, a) }

export function add(a, b) {
	let [integerA, denominatorA] = base10Fraction(a),
		[integerB, denominatorB] = base10Fraction(b)

	if (denominatorA == denominatorB)
		return base10FractionToFloat(integerA + integerB, denominatorA)

	return denominatorA < denominatorB
		? base10FractionToFloat(integerA * 10n ** (denominatorB - denominatorA) + integerB, denominatorB)
		: base10FractionToFloat(integerA + integerB * 10n ** (denominatorA - denominatorB), denominatorA)
}

export function sub(a, b) {
	let [integerA, denominatorA] = base10Fraction(a),
		[integerB, denominatorB] = base10Fraction(b)

	if (denominatorA == denominatorB)
		return base10FractionToFloat(integerA - integerB, denominatorA)

	return denominatorA < denominatorB
		? base10FractionToFloat(integerA * 10n ** (denominatorB - denominatorA) - integerB, denominatorB)
		: base10FractionToFloat(integerA - integerB * 10n ** (denominatorA - denominatorB), denominatorA)
}

export function mul(a, b) {
	let [integerA, denominatorA] = base10Fraction(a),
		[integerB, denominatorB] = base10Fraction(b)
	return base10FractionToFloat(integerA * integerB, denominatorA + denominatorB)
}

export function div(a, b) {
	let [integerA, denominatorA] = base10Fraction(a),
		[integerB, denominatorB] = base10Fraction(b),
		reminder = integerA % integerB

	if (denominatorA == denominatorB) return reminder == 0
		? String(integerA / integerB)
		: quotientToFloat(integerA, integerB)

	if (denominatorA < denominatorB) return reminder == 0
		? String((10n ** (denominatorB - denominatorA) * integerA) / integerB)
		: mul(quotientToFloat(integerA, integerB), String(10n ** (denominatorB - denominatorA)))

	if (reminder == 0)
		return base10FractionToFloat(integerA / integerB, denominatorA - denominatorB)

	let [integer, denominator] = base10Fraction(quotientToFloat(integerA, integerB))
	return base10FractionToFloat(integer, denominator + denominatorA - denominatorB)
}
