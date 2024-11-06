import { isFloat, add as addFloat, sub as subFloat, mul as mulFloat, div as divFloat } from './float.js'
export { isFloat, neg } from './float.js'

export function fractionToRational(numerator, denominator) {
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

export function splitRational(arg) {
	if (typeof arg != 'string') arg = String(arg)
	let [integer, mantissa] = arg.split('.')
	if (mantissa == undefined) return [integer, '', '']
	let [decimalFixedPart, decimalRepeatingPart] = mantissa.split('_')
	return [integer, decimalFixedPart ?? '', decimalRepeatingPart ?? '']
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

export function isRational(arg) {
	let decimalRepeatingPart = splitRational(arg)[2]
	if (!decimalRepeatingPart) return isFloat(arg)
	try {
		if (BigInt(decimalRepeatingPart) < 0) return false
		return true
	} catch (_) {
		return false
	}
}

export function rationalToNumber(rational, mantissaLen = 16) {
	let [integer, decimalFixedPart, decimalRepeatingPart] = splitRational(rational),
		decimalPart = decimalFixedPart
	if (decimalRepeatingPart)
		while (true) {
			decimalPart += decimalRepeatingPart
			if (decimalPart.length >= mantissaLen) break
		}
	return Number(Number(parseFloat(integer + '.' + decimalPart)).toFixed(mantissaLen))
}

// Operators
////////////

export function eq(a, b) { return a == b || sub(a, b) == '0' }

export function inv(a) { return div('1', a) }

export function add(a, b) {
	let [integerA, decimalFixedPartA, decimalRepeatingPartA] = splitRational(a),
		[integerB, decimalFixedPartB, decimalRepeatingPartB] = splitRational(b)

	if (decimalRepeatingPartA == '' && decimalRepeatingPartB == '') return addFloat(a, b)

	let [numeratorA, denominatorA] = getFraction(integerA, decimalFixedPartA, decimalRepeatingPartA),
		[numeratorB, denominatorB] = getFraction(integerB, decimalFixedPartB, decimalRepeatingPartB)

	return fractionToRational(numeratorA * denominatorB + numeratorB * denominatorA, denominatorA * denominatorB)
}

export function sub(a, b) {
	let [integerA, decimalFixedPartA, decimalRepeatingPartA] = splitRational(a),
		[integerB, decimalFixedPartB, decimalRepeatingPartB] = splitRational(b)

	if (decimalRepeatingPartA == '' && decimalRepeatingPartB == '') return subFloat(a, b)

	let [numeratorA, denominatorA] = getFraction(integerA, decimalFixedPartA, decimalRepeatingPartA),
		[numeratorB, denominatorB] = getFraction(integerB, decimalFixedPartB, decimalRepeatingPartB)

	return fractionToRational(numeratorA * denominatorB - numeratorB * denominatorA, denominatorA * denominatorB)
}

export function mul(a, b) {
	let [integerA, decimalFixedPartA, decimalRepeatingPartA] = splitRational(a),
		[integerB, decimalFixedPartB, decimalRepeatingPartB] = splitRational(b)

	if (decimalRepeatingPartA == '' && decimalRepeatingPartB == '') return mulFloat(a, b)

	let [numeratorA, denominatorA] = getFraction(integerA, decimalFixedPartA, decimalRepeatingPartA),
		[numeratorB, denominatorB] = getFraction(integerB, decimalFixedPartB, decimalRepeatingPartB)

	return fractionToRational(numeratorA * numeratorB, denominatorA * denominatorB)
}

export function div(a, b) {
	let [integerA, decimalFixedPartA, decimalRepeatingPartA] = splitRational(a),
		[integerB, decimalFixedPartB, decimalRepeatingPartB] = splitRational(b)

	if (decimalRepeatingPartA == '' && decimalRepeatingPartB == '') return divFloat(a, b)

	let [numeratorA, denominatorA] = getFraction(integerA, decimalFixedPartA, decimalRepeatingPartA),
		[numeratorB, denominatorB] = getFraction(integerB, decimalFixedPartB, decimalRepeatingPartB)

	return fractionToRational(numeratorA * denominatorB, denominatorA * numeratorB)
}

export function lt(a, b) {
	let [numeratorA, denominatorA] = getFraction(...splitRational(a)),
		[numeratorB, denominatorB] = getFraction(...splitRational(b))
	return numeratorA * denominatorB < numeratorB * denominatorA
}

export function gt(a, b) {
	let [numeratorA, denominatorA] = getFraction(...splitRational(a)),
		[numeratorB, denominatorB] = getFraction(...splitRational(b))
	return numeratorA * denominatorB > numeratorB * denominatorA
}
