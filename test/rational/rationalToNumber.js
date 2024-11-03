import { strict as assert } from 'node:assert'
import { describe, test } from 'node:test'
import { rationalToNumber } from '#src/rational.js'
import { floatToNumberTest } from '#test/float/floatToNumber.js'

const rationalToNumberTest = {
	message: 'converts a Rational to a Number',
	data: [
		{ input: { rational: '0.1', mantissaLength: 1 }, output: 0.1 },
		{ input: { rational: '0.456', mantissaLength: 2 }, output: 0.46 },
		{ input: { rational: '0._3', mantissaLength: 8 }, output: 0.33333333 },
		{ input: { rational: '-0._3', mantissaLength: 8 }, output: -0.33333333 },
		{ input: { rational: '0.1_2', mantissaLength: 4 }, output: 0.1222 },
		{ input: { rational: '0.12_34', mantissaLength: 1 }, output: 0.1 },
		{ input: { rational: '0.12_34', mantissaLength: 2 }, output: 0.12 },
		{ input: { rational: '0.12_34', mantissaLength: 3 }, output: 0.123 },
		{ input: { rational: '0.12_34', mantissaLength: 4 }, output: 0.1234 },
		{ input: { rational: '0.12_34', mantissaLength: 5 }, output: 0.12343 },
		{ input: { rational: '0.12_34', mantissaLength: 6 }, output: 0.123434 },
		{ input: { rational: '0.1_23', mantissaLength: 6 }, output: 0.123232 },
	]
}

const rationalToNumberMantissaLengthIsOptionalTest = {
	message: '`mantissaLength` is optional',
	data: [
		{ input: '0.1', output: 0.1 }
	]
}

describe('rationalToNumber', () => {
	test(floatToNumberTest.message, () => {
		floatToNumberTest.data.forEach(({ input: { floatStr, mantissaLength }, output }) => {
			assert.equal(rationalToNumber(floatStr, mantissaLength), output)
		})
	})

	test(rationalToNumberTest.message, () => {
		rationalToNumberTest.data.forEach(({ input: { rational, mantissaLength }, output }) => {
			assert.equal(rationalToNumber(rational, mantissaLength), output)
		})
	})

	test(rationalToNumberMantissaLengthIsOptionalTest.message, () => {
		rationalToNumberMantissaLengthIsOptionalTest.data.forEach(({ input, output }) => {
			assert.equal(rationalToNumber(input, 8), output)
		})
	})
})
