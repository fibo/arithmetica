import { strict } from 'node:assert'
import { test } from 'node:test'
import { quotientToFloat } from 'arithmetica/float.js'

test('quotientToFloat', () => {
	[
		{
			input: { integerA: 42n, integerB: 1n },
			output: '42'
		},
		{
			input: { integerA: 1n, integerB: 2n },
			output: '0.5'
		},
		{
			input: { integerA: 8n, integerB: 16n },
			output: '0.5'
		},
		{
			input: { integerA: 2n, integerB: 2n },
			output: '1'
		},
		{
			input: { integerA: 63n, integerB: 4n },
			output: '15.75'
		},
		{
			input: { integerA: -2n, integerB: 2n },
			output: '-1'
		},
		{
			input: { integerA: -10n, integerB: 5n },
			output: '-2'
		},
		{
			input: { integerA: -100n, integerB: -10n },
			output: '10'
		},
		{
			input: { integerA: -110n, integerB: -100n },
			output: '1.1'
		},
	].forEach(({ input: { integerA, integerB }, output }) => {
		strict.equal(quotientToFloat(integerA, integerB), output)
	})
})
