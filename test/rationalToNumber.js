import { strict } from 'node:assert'
import { test } from 'node:test'
import { rationalToNumber } from 'arithmetica'

test('util: `rationalToNumber`', () => {
	[
		{ input: { rational: '0.1', numDecimals: 1 }, output: 0.1 },
		{ input: { rational: '0.456', numDecimals: 2 }, output: 0.46 },
		{ input: { rational: '0._3', numDecimals: 8 }, output: 0.33333333 },
		{ input: { rational: '0._3' /* default */ }, output: 0.3333333333333333 },
		{ input: { rational: '-0._3', numDecimals: 8 }, output: -0.33333333 },
		{ input: { rational: '0.1_2', numDecimals: 4 }, output: 0.1222 },
		{ input: { rational: '0.12_34', numDecimals: 1 }, output: 0.1 },
		{ input: { rational: '0.12_34', numDecimals: 2 }, output: 0.12 },
		{ input: { rational: '0.12_34', numDecimals: 3 }, output: 0.123 },
		{ input: { rational: '0.12_34', numDecimals: 4 }, output: 0.1234 },
		{ input: { rational: '0.12_34', numDecimals: 5 }, output: 0.12343 },
		{ input: { rational: '0.12_34', numDecimals: 6 }, output: 0.123434 },
		{ input: { rational: '0.1_23', numDecimals: 6 }, output: 0.123232 },
		{ input: { rational: '0.1', numDecimals: 1 }, output: 0.1 },
		{ input: { rational: '1', numDecimals: 0 }, output: 1 },
		{ input: { rational: '-1', numDecimals: 0 }, output: -1 },
		{ input: { rational: '1234.56789', numDecimals: 2 }, output: 1234.57 },
		{ input: { rational: '-1234.56789', numDecimals: 3 }, output: -1234.568 },
		{ input: { rational: '0.1' }, output: 0.1 }
	].forEach(({ input: { rational, numDecimals }, output }) => {
		strict.equal(rationalToNumber(rational, numDecimals), output)
	})
})
