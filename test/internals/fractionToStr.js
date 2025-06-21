import { strict } from 'node:assert'
import { test } from 'node:test'
import { fractionToStr } from '#src/internals.js'

test('internal: `fractionToStr`', () => {
	for (const { input: { numerator, denominator }, output } of [
		{ input: { numerator: 1n, denominator: 1n }, output: '1' },
		{ input: { numerator: 8n, denominator: -2n }, output: '-4' },
		{ input: { numerator: 5n, denominator: 10n }, output: '0.5' },
		{ input: { numerator: 0n, denominator: 1n }, output: '0' },
		{ input: { numerator: 1n, denominator: 9n }, output: '0._1' },
		{ input: { numerator: 1n, denominator: 3n }, output: '0._3' },
		{ input: { numerator: -1n, denominator: -9n }, output: '0._1' },
		{ input: { numerator: -1n, denominator: 9n }, output: '-0._1' },
		{ input: { numerator: 1n, denominator: -9n }, output: '-0._1' },
		{ input: { numerator: 3n, denominator: 7n }, output: '0._428571' },
		{ input: { numerator: -5n, denominator: 3n }, output: '-1._6' },
	]) {
		const rational = fractionToStr(numerator, denominator)
		strict.equal(rational, output)
	}
})
