import { strict } from 'node:assert'
import { test } from 'node:test'
import { base10ToStr } from '#src/internals.js'

test('internal: `base10ToStr`', () => {
	for (const { input: { bigInt, denominatorBase10Exp }, output } of [
		{ input: { bigInt: 42n, denominatorBase10Exp: 0n }, output: '42' },
		{ input: { bigInt: -42n, denominatorBase10Exp: 0n }, output: '-42' },
		{ input: { bigInt: 42n, denominatorBase10Exp: 1n }, output: '4.2' },
		{ input: { bigInt: -42n, denominatorBase10Exp: 1n }, output: '-4.2' },
		{ input: { bigInt: 42n, denominatorBase10Exp: 2n }, output: '0.42' },
		{ input: { bigInt: 12345n, denominatorBase10Exp: 2n }, output: '123.45' },
		{ input: { bigInt: -12345n, denominatorBase10Exp: 2n }, output: '-123.45' },
		{ input: { bigInt: -42n, denominatorBase10Exp: 2n }, output: '-0.42' },
		{ input: { bigInt: 1010n, denominatorBase10Exp: 2n }, output: '10.1' },
		{ input: { bigInt: 2n, denominatorBase10Exp: 2n }, output: '0.02' },
		{ input: { bigInt: 1234n, denominatorBase10Exp: 8n }, output: '0.00001234' },
		{ input: { bigInt: 0n, denominatorBase10Exp: 19n }, output: '0' },
		{
			input: { bigInt: -211887249607760n, denominatorBase10Exp: 17n },
			output: '-0.0021188724960776'
		}
	])
		strict.equal(base10ToStr(bigInt, denominatorBase10Exp), output)
})
