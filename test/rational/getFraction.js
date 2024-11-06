import { strict } from 'node:assert'
import { test } from 'node:test'
import { getFraction } from '#src/rational.js'

test('getFraction', () => {
	[
		{
			input: { integer: '2', decimalFixedPart: '', decimalRepeatingPart: '' },
			output: { numerator: 2n, denominator: 1n }
		},
		{
			input: { integer: '-1', decimalFixedPart: '', decimalRepeatingPart: '' },
			output: { numerator: -1n, denominator: 1n }
		},
		{
			input: { integer: '-2', decimalFixedPart: '5', decimalRepeatingPart: '' },
			output: { numerator: -25n, denominator: 10n }
		},
		{
			input: { integer: '0', decimalFixedPart: '', decimalRepeatingPart: '1' },
			output: { numerator: 1n, denominator: 9n }
		},
		{
			input: { integer: '0', decimalFixedPart: '3', decimalRepeatingPart: '' },
			output: { numerator: 3n, denominator: 10n }
		},
		{
			input: { integer: '0', decimalFixedPart: '', decimalRepeatingPart: '3' },
			output: { numerator: 3n, denominator: 9n }
		},
		{
			input: { integer: '8', decimalFixedPart: '', decimalRepeatingPart: '5' },
			output: {
				numerator: 77n,
				denominator: 9n
			}
		},
		{
			input: { integer: '8', decimalFixedPart: '4', decimalRepeatingPart: '35' },
			output: { numerator: 8351n, denominator: 990n }
		},
		{
			input: { integer: '42', decimalFixedPart: '', decimalRepeatingPart: '' },
			output: { numerator: 42n, denominator: 1n }
		},
	].forEach(({ input: { integer, decimalFixedPart, decimalRepeatingPart }, output }) => {
		const [numerator, denominator] = getFraction(integer, decimalFixedPart, decimalRepeatingPart)
		strict.equal(numerator, output.numerator)
		strict.equal(denominator, output.denominator)
	})
})
