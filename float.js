export const isFloat = (arg) => {
	if (typeof arg !== 'string') return false

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

	let firstLetter = arg.charAt(0)
	let secondLetter = arg.charAt(1)
	let thirdLetter = arg.charAt(2)

	// Cannot have right padded zeros.
	if (firstLetter === '0' && secondLetter === '0') return false
	if (firstLetter === '-' && secondLetter === '0' && thirdLetter === '0') return false
	// It must have a number after minus sign.
	if (firstLetter === '-' && secondLetter === '.') return false
	// It cannot be `-0`.
	if (firstLetter === '-' && secondLetter === '0' && thirdLetter === '') return false
	return true
}

export const floatToNumber = (floatStr, mantissaLen) => Number(Number(parseFloat(floatStr)).toFixed(mantissaLen))

export const coerceToFloat = (arg) => {
	let value = arg
	if (isFloat(value)) return value
	if (arg !== null && typeof arg === 'object' && typeof arg.valueOf === 'function') value = arg.valueOf()
	if (typeof value === 'bigint') return value.toString()
	if (typeof value === 'number' && !isNaN(value) && Number.isFinite(value)) return value.toString()
	throw new Error('Cannot coerce')
}

export const base10FractionToFloat = (bigInt, denominatorBase10Exponent) => {
	const bigIntStr = String(bigInt)
	if (bigIntStr === '0') return '0'
	const bigIntStrLen = BigInt(bigIntStr.length)
	if (denominatorBase10Exponent === 0n) return bigIntStr
	if (bigInt < 0n) {
		// Consider leading minus sign, for example `bigIntStrLen - 1n`.
		if (bigIntStrLen - 1n === denominatorBase10Exponent) {
			return '-0.' + bigIntStr.slice(1)
		} else if (bigIntStrLen - 1n < denominatorBase10Exponent) {
			return removeRightPaddedZerosFromNonRepeatingDecimal('-0.' + '0'.repeat(Number(denominatorBase10Exponent - bigIntStrLen + 1n)) + bigIntStr.slice(1))
		} else {
			return removeRightPaddedZerosFromNonRepeatingDecimal(
				'-' + bigIntStr.slice(1, Number(bigIntStrLen - denominatorBase10Exponent)) +
				'.' + bigIntStr.slice(Number(bigIntStrLen - denominatorBase10Exponent))
			)
		}
	} else {
		if (bigIntStrLen === denominatorBase10Exponent) {
			return '0.' + bigIntStr
		} else if (bigIntStrLen < denominatorBase10Exponent) {
			return removeRightPaddedZerosFromNonRepeatingDecimal('0.' + '0'.repeat(Number(denominatorBase10Exponent - bigIntStrLen)) + bigIntStr)
		} else {
			return removeRightPaddedZerosFromNonRepeatingDecimal(
				bigIntStr.slice(0, Number(bigIntStrLen - denominatorBase10Exponent)) +
				'.' + bigIntStr.slice(Number(bigIntStrLen - denominatorBase10Exponent))
			)
		}
	}
}

export const quotientToFloat = (integerA, integerB) => {
	let reminder = integerA % integerB
	if (reminder === 0n) return String(integerA / integerB)
	let numerator, decimalPart = ''
	while (reminder !== 0n) {
		numerator = reminder * 10n
		decimalPart += String(numerator / integerB)
		reminder = numerator % integerB
	}
	return String(integerA / integerB) + '.' + decimalPart
}

export const floatToBase10Fraction = (floatStr) => {
	let [integer, mantissa] = floatStr.split('.')
	if (mantissa === undefined) return [BigInt(integer), 0n]
	return [BigInt(integer + mantissa), BigInt(mantissa.length)]
}

// This function is used only for numbers with mantissa.
// Cases when `bigIntStr` is `'0'` or any other integer are not handled.
export const removeRightPaddedZerosFromNonRepeatingDecimal = (bigIntStr) => {
	let letter, i = bigIntStr.length - 1
	while (true) {
		letter = bigIntStr.charAt(i)
		if (letter === '0') {
			i--
			continue
		}
		break
	}
	if (i === bigIntStr.length - 1) return bigIntStr
	if (bigIntStr.charAt(i) === '.') return bigIntStr.slice(0, i)
	return bigIntStr.slice(0, i + 1)
}

// Operators
////////////

export const eq = (a, b) => (a === b ? true : sub(a, b) === '0')

export const neg = (a) => (a.charAt(0) === '-' ? a.slice(1) : '-' + a)

export const inv = (a) => div('1', a)

export const add = (a, b) => {
	const [integerA, denominatorBase10ExponentA] = floatToBase10Fraction(a)
	const [integerB, denominatorBase10ExponentB] = floatToBase10Fraction(b)

	if (denominatorBase10ExponentA === denominatorBase10ExponentB) return base10FractionToFloat(integerA + integerB, denominatorBase10ExponentA)

	return denominatorBase10ExponentA < denominatorBase10ExponentB
		? base10FractionToFloat(integerA * 10n ** (denominatorBase10ExponentB - denominatorBase10ExponentA) + integerB, denominatorBase10ExponentB)
		: base10FractionToFloat(integerA + integerB * 10n ** (denominatorBase10ExponentA - denominatorBase10ExponentB), denominatorBase10ExponentA)
}

export const sub = (a, b) => {
	const [integerA, denominatorBase10ExponentA] = floatToBase10Fraction(a)
	const [integerB, denominatorBase10ExponentB] = floatToBase10Fraction(b)

	if (denominatorBase10ExponentA === denominatorBase10ExponentB) return base10FractionToFloat(integerA - integerB, denominatorBase10ExponentA)

	return denominatorBase10ExponentA < denominatorBase10ExponentB
		? base10FractionToFloat(integerA * 10n ** (denominatorBase10ExponentB - denominatorBase10ExponentA) - integerB, denominatorBase10ExponentB)
		: base10FractionToFloat(integerA - integerB * 10n ** (denominatorBase10ExponentA - denominatorBase10ExponentB), denominatorBase10ExponentA)
}

export const mul = (a, b) => {
	const [integerA, denominatorBase10ExponentA] = floatToBase10Fraction(a)
	const [integerB, denominatorBase10ExponentB] = floatToBase10Fraction(b)
	return base10FractionToFloat(integerA * integerB, denominatorBase10ExponentA + denominatorBase10ExponentB)
}

export const div = (a, b) => {
	const [integerA, denominatorBase10ExponentA] = floatToBase10Fraction(a)
	const [integerB, denominatorBase10ExponentB] = floatToBase10Fraction(b)

	const reminder = integerA % integerB

	if (denominatorBase10ExponentA === denominatorBase10ExponentB) return reminder === 0n ? String(integerA / integerB) : quotientToFloat(integerA, integerB)

	if (denominatorBase10ExponentA < denominatorBase10ExponentB)
		return reminder === 0n
			? String((10n ** (denominatorBase10ExponentB - denominatorBase10ExponentA) * integerA) / integerB)
			: mul(quotientToFloat(integerA, integerB), String(10n ** (denominatorBase10ExponentB - denominatorBase10ExponentA)))

	if (reminder === 0n) return base10FractionToFloat(integerA / integerB, denominatorBase10ExponentA - denominatorBase10ExponentB)

	const [integer, denominatorBase10Exponent] = floatToBase10Fraction(quotientToFloat(integerA, integerB))
	return base10FractionToFloat(integer, denominatorBase10Exponent + denominatorBase10ExponentA - denominatorBase10ExponentB)
}

export const lt = (a, b) => a < b

export const gt = (a, b) => a > b