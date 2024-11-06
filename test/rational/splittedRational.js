import { strict } from 'node:assert'
import { test } from 'node:test'
import { splitRational } from '#src/rational.js'

test('splitRational', () => {
	[
		{
			input: '1.2_3',
			output: { integer: '1', decimalFixedPart: '2', decimalRepeatingPart: '3' }
		},
		{
			input: '1._2',
			output: { integer: '1', decimalFixedPart: '', decimalRepeatingPart: '2' }
		},
		{
			input: '8._5',
			output: { integer: '8', decimalFixedPart: '', decimalRepeatingPart: '5' }
		},
		{
			input: '-1.2_3',
			output: { integer: '-1', decimalFixedPart: '2', decimalRepeatingPart: '3' }
		}
	].forEach(({ input, output }) => {
		const [integer, decimalFixedPart, decimalRepeatingPart] = splitRational(input)
		strict.equal(integer, output.integer)
		strict.equal(decimalFixedPart, output.decimalFixedPart)
		strict.equal(decimalRepeatingPart, output.decimalRepeatingPart)
	})
})
