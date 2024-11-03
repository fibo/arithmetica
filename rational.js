import {
	coerceToFloat, floatToBase10Fraction, isFloat,
    add as addFloat, sub as subFloat, mul as mulFloat, div as divFloat, lt as ltFloat, gt as gtFloat
} from './float.js'

export { coerceToFloat, floatToNumber, isFloat, neg } from './float.js'

export const fractionToRational = (numerator, denominator) => {
	if (numerator === 0n) return '0'
	let reminder = numerator % denominator
	if (reminder === 0n) return String(numerator / denominator)
	let isNegative = false
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
	let digit, decimalPart = ''
	let i // index of first repeating decimal
	while (true) {
		numerator = reminder * 10n
		digit = String(numerator / denominator)
		i = decimalPart.indexOf(digit)
		if (i > -1) return integerPart + '.' + decimalPart.slice(0, i) + '_' + decimalPart.slice(i)
		decimalPart += digit
		reminder = numerator % denominator
		if (reminder === 0n) return integerPart + '.' + decimalPart
	}
}

export const splitRational = (rational) => {
	let [integer, mantissa] = rational.split('.')
	if (mantissa === undefined) return [integer, '', '']
	let [decimalFixedPart, decimalRepeatingPart] = mantissa.split('_')
	return [integer, decimalFixedPart ?? '', decimalRepeatingPart ?? '']
}

export const splittedRationalToFraction = (integer, decimalFixedPart, decimalRepeatingPart) => {
	if (decimalRepeatingPart) {
		let numerator = BigInt(integer + decimalFixedPart + decimalRepeatingPart) - BigInt(integer + decimalFixedPart)
		let denominator = BigInt('9'.repeat(decimalRepeatingPart.length) + '0'.repeat(decimalFixedPart.length))
		return [numerator, denominator]
	}
	if (decimalFixedPart) {
		let [bigInt, denominatorBase10Exponent] = floatToBase10Fraction(integer + '.' + decimalFixedPart)
		return [bigInt, 10n ** denominatorBase10Exponent]
	}
	return [BigInt(integer), 1n]
}

export const isRational = (arg) => {
	if (typeof arg !== 'string') return false
	let [_, __, decimalRepeatingPart] = splitRational(arg)
	if (decimalRepeatingPart === '') return isFloat(arg)
	try {
		if (BigInt(decimalRepeatingPart) < 0) return false
		return true
	} catch (_) {
		return false
	}
}

export const rationalToNumber = (rational, mantissaLen = 16) => {
	let [integer, decimalFixedPart, decimalRepeatingPart] = splitRational(rational)
	let decimalPart = decimalFixedPart
	if (decimalRepeatingPart !== '')
		while (true) {
			decimalPart += decimalRepeatingPart
			if (decimalPart.length >= mantissaLen) break
		}
	return Number(Number(parseFloat(integer + '.' + decimalPart)).toFixed(mantissaLen))
}

export const coerceToRational = (arg) => (isRational(arg) ? arg : coerceToFloat(arg))

// Operators
////////////

export const eq = (a, b) => (a === b ? true : sub(a, b) === '0')

export const inv = (a) => div('1', a)

export const add = (a, b) => {
	const [integerA, decimalFixedPartA, decimalRepeatingPartA] = splitRational(a)
	const [integerB, decimalFixedPartB, decimalRepeatingPartB] = splitRational(b)

	if (decimalRepeatingPartA === '' && decimalRepeatingPartB === '') return addFloat(a, b)

	const [numeratorA, denominatorA] = splittedRationalToFraction(integerA, decimalFixedPartA, decimalRepeatingPartA)
	const [numeratorB, denominatorB] = splittedRationalToFraction(integerB, decimalFixedPartB, decimalRepeatingPartB)

	return fractionToRational(numeratorA * denominatorB + numeratorB * denominatorA, denominatorA * denominatorB)
}

export const sub = (a, b) => {
	const [integerA, decimalFixedPartA, decimalRepeatingPartA] = splitRational(a)
	const [integerB, decimalFixedPartB, decimalRepeatingPartB] = splitRational(b)

	if (decimalRepeatingPartA === '' && decimalRepeatingPartB === '') return subFloat(a, b)

	const [numeratorA, denominatorA] = splittedRationalToFraction(integerA, decimalFixedPartA, decimalRepeatingPartA)
	const [numeratorB, denominatorB] = splittedRationalToFraction(integerB, decimalFixedPartB, decimalRepeatingPartB)

	return fractionToRational(numeratorA * denominatorB - numeratorB * denominatorA, denominatorA * denominatorB)
}

export const mul = (a, b) => {
	const [integerA, decimalFixedPartA, decimalRepeatingPartA] = splitRational(a)
	const [integerB, decimalFixedPartB, decimalRepeatingPartB] = splitRational(b)

	if (decimalRepeatingPartA === '' && decimalRepeatingPartB === '') return mulFloat(a, b)

	const [numeratorA, denominatorA] = splittedRationalToFraction(integerA, decimalFixedPartA, decimalRepeatingPartA)
	const [numeratorB, denominatorB] = splittedRationalToFraction(integerB, decimalFixedPartB, decimalRepeatingPartB)

	return fractionToRational(numeratorA * numeratorB, denominatorA * denominatorB)
}

export const div = (a, b) => {
	const [integerA, decimalFixedPartA, decimalRepeatingPartA] = splitRational(a)
	const [integerB, decimalFixedPartB, decimalRepeatingPartB] = splitRational(b)

	if (decimalRepeatingPartA === '' && decimalRepeatingPartB === '') return divFloat(a, b)

	const [numeratorA, denominatorA] = splittedRationalToFraction(integerA, decimalFixedPartA, decimalRepeatingPartA)
	const [numeratorB, denominatorB] = splittedRationalToFraction(integerB, decimalFixedPartB, decimalRepeatingPartB)

	if (denominatorA === denominatorB) return fractionToRational(numeratorA, numeratorB)

	if (numeratorA === 1n && denominatorA === 1n) return fractionToRational(denominatorB, numeratorB)

	return fractionToRational(numeratorA * denominatorB, denominatorA * numeratorB)
}

export const lt = (a, b) => {
	if (isFloat(a) && isFloat(b)) return ltFloat(a, b)

	const [integerA, decimalFixedPartA, decimalRepeatingPartA] = splitRational(a)
	const [integerB, decimalFixedPartB, decimalRepeatingPartB] = splitRational(b)

	const [numeratorA, denominatorA] = splittedRationalToFraction(integerA, decimalFixedPartA, decimalRepeatingPartA)
	const [numeratorB, denominatorB] = splittedRationalToFraction(integerB, decimalFixedPartB, decimalRepeatingPartB)

	return numeratorA * denominatorB < numeratorB * denominatorA
}

export const gt = (a, b) => {
	if (isFloat(a) && isFloat(b)) return gtFloat(a, b)

	const [integerA, decimalFixedPartA, decimalRepeatingPartA] = splitRational(a)
	const [integerB, decimalFixedPartB, decimalRepeatingPartB] = splitRational(b)

	const [numeratorA, denominatorA] = splittedRationalToFraction(integerA, decimalFixedPartA, decimalRepeatingPartA)
	const [numeratorB, denominatorB] = splittedRationalToFraction(integerB, decimalFixedPartB, decimalRepeatingPartB)

	return numeratorA * denominatorB > numeratorB * denominatorA
}
