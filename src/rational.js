import { base10ToStr, finiteDecimal, fractionToStr, getBase10, getFraction, isValidNum, isValidStr, splitStr } from './internals.js'

 // Utils
////////////

export function coerceToRational(arg) {
	if (isValidNum(arg) || typeof arg == 'bigint')
		return String(arg)
	if (typeof arg == 'string' && isValidStr(arg))
		return arg
	throw new TypeError(`Cannot coerce ${arg} to Rational`)
}

export function isRational(arg) {
	if (typeof arg != 'string') return false
	return isValidStr(arg)
}

export function rationalToNumber(arg, numDecimals = 16) {
	let [int, fixed, repeating] = splitStr(coerceToRational(arg)),
		decimal = fixed
	if (repeating)
		while (true) {
			decimal += repeating
			if (decimal.length >= numDecimals) break
		}
	return Number(Number(parseFloat(int + '.' + decimal)).toFixed(numDecimals))
}

 // Operators
////////////

export function add(a, b) {
	let [intA, fixedA, repeatingA] = splitStr(coerceToRational(a)),
		[intB, fixedB, repeatingB] = splitStr(coerceToRational(b))

	if (!repeatingA && !repeatingB) {
		let [intA, expA] = getBase10(a),
			[intB, expB] = getBase10(b)

		if (expA == expB)
			return base10ToStr(intA + intB, expA)

		return expA < expB
			? base10ToStr(intA * 10n ** (expB - expA) + intB, expB)
			: base10ToStr(intA + intB * 10n ** (expA - expB), expA)
	}

	let [numA, denA] = getFraction(intA, fixedA, repeatingA),
		[numB, denB] = getFraction(intB, fixedB, repeatingB)

	return fractionToStr(numA * denB + numB * denA, denA * denB)
}

export function sub(a, b) {
	let [intA, fixedA, repeatingA] = splitStr(coerceToRational(a)),
		[intB, fixedB, repeatingB] = splitStr(coerceToRational(b))

	if (!repeatingA && !repeatingB) {
		let [intA, expA] = getBase10(a),
			[intB, expB] = getBase10(b)

		if (expA == expB)
			return base10ToStr(intA - intB, expA)

		return expA < expB
			? base10ToStr(intA * 10n ** (expB - expA) - intB, expB)
			: base10ToStr(intA - intB * 10n ** (expA - expB), expA)
	}

	let [numA, denA] = getFraction(intA, fixedA, repeatingA),
		[numB, denB] = getFraction(intB, fixedB, repeatingB)

	return fractionToStr(numA * denB - numB * denA, denA * denB)
}

export function eq(a, b) { return a == b || sub(a, b) == '0' }

export function neg (a) {
	if (typeof a != 'string')
		return a ? -a : a
	if (a == 0)
		return a
	if (a.charAt(0) == '-')
		return a.slice(1)
	return '-' + a
}

export function inv(a) { return div('1', a) }

export function mul(a, b) {
	let [intA, fixedA, repeatingA] = splitStr(coerceToRational(a)),
		[intB, fixedB, repeatingB] = splitStr(coerceToRational(b))

	if (!repeatingA && !repeatingB) {
		let [intA, expA] = getBase10(a),
			[intB, expB] = getBase10(b)
		return base10ToStr(intA * intB, expA + expB)
	}

	let [numA, denA] = getFraction(intA, fixedA, repeatingA),
		[numB, denB] = getFraction(intB, fixedB, repeatingB)

	return fractionToStr(numA * numB, denA * denB)
}

export function div(a, b) {
	let [intA, fixedA, repeatingA] = splitStr(coerceToRational(a)),
		[intB, fixedB, repeatingB] = splitStr(coerceToRational(b))

	if (!repeatingA && !repeatingB) {
		let [intA, expA] = getBase10(a),
			[intB, expB] = getBase10(b),
			reminder = intA % intB

		if (expA == 0 && expB == 0)
			return fractionToStr(intA, intB)

		if (expA == expB) return reminder == 0
			? String(intA / intB)
			: finiteDecimal(intA, intB)

		if (expA < expB) return reminder == 0
			? String((10n ** (expB - expA) * intA) / intB)
			: mul(finiteDecimal(intA, intB), String(10n ** (expB - expA)))

		if (reminder == 0)
			return base10ToStr(intA / intB, expA - expB)

		let [int, exp] = getBase10(finiteDecimal(intA, intB))
		return base10ToStr(int, exp + expA - expB)
	}

	let [numA, denA] = getFraction(intA, fixedA, repeatingA),
		[numB, denB] = getFraction(intB, fixedB, repeatingB)

	return fractionToStr(numA * denB, denA * numB)
}

export function lt(a, b) {
	let [numA, denA] = getFraction(...splitStr(coerceToRational(a))),
		[numB, denB] = getFraction(...splitStr(coerceToRational(b)))
	return numA * denB < numB * denA
}

export function gt(a, b) {
	let [numA, denA] = getFraction(...splitStr(coerceToRational(a))),
		[numB, denB] = getFraction(...splitStr(coerceToRational(b)))
	return numA * denB > numB * denA
}
