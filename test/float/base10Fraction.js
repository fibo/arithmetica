import { strict } from 'node:assert'
import { test } from 'node:test'
import { base10Fraction } from '#src/float.js'

const testData = [
	{ input: '0', output: { integer: 0n, exponent: 0n } },
	{ input: '1.2', output: { integer: 12n, exponent: 1n } },
	{ input: '-123.45', output: { integer: -12345n, exponent: 2n } },
	{ input: 4.2, output: { integer: 42n, exponent: 1n } },
]

test('base10Fraction', () => {
	testData.forEach(({ input, output }) => {
		const [integer, exponent] = base10Fraction(input)
		strict.equal(integer, output.integer)
		strict.equal(exponent, output.exponent)
	})
})
