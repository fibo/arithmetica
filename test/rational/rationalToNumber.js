import { strict } from 'node:assert'
import { test } from 'node:test'
import { rationalToNumber } from 'arithmetica/rational.js'

test('rationalToNumber', () => {
	[
		{ input: { rational: '0.1', mantissaLen: 1 }, output: 0.1 },
		{ input: { rational: '0.456', mantissaLen: 2 }, output: 0.46 },
		{ input: { rational: '0._3', mantissaLen: 8 }, output: 0.33333333 },
		{ input: { rational: '-0._3', mantissaLen: 8 }, output: -0.33333333 },
		{ input: { rational: '0.1_2', mantissaLen: 4 }, output: 0.1222 },
		{ input: { rational: '0.12_34', mantissaLen: 1 }, output: 0.1 },
		{ input: { rational: '0.12_34', mantissaLen: 2 }, output: 0.12 },
		{ input: { rational: '0.12_34', mantissaLen: 3 }, output: 0.123 },
		{ input: { rational: '0.12_34', mantissaLen: 4 }, output: 0.1234 },
		{ input: { rational: '0.12_34', mantissaLen: 5 }, output: 0.12343 },
		{ input: { rational: '0.12_34', mantissaLen: 6 }, output: 0.123434 },
		{ input: { rational: '0.1_23', mantissaLen: 6 }, output: 0.123232 },
		{ input: { rational: '0.1', mantissaLen: 1 }, output: 0.1 },
		{ input: { rational: '1', mantissaLen: 0 }, output: 1 },
		{ input: { rational: '-1', mantissaLen: 0 }, output: -1 },
		{ input: { rational: '1234.56789', mantissaLen: 2 }, output: 1234.57 },
		{ input: { rational: '-1234.56789', mantissaLen: 3 }, output: -1234.568 },
		{ input: { rational: '0.1' }, output: 0.1 }
	].forEach(({ input: { rational, mantissaLen }, output }) => {
		strict.equal(rationalToNumber(rational, mantissaLen), output)
	})
})
