import { strict } from 'node:assert'
import { test } from 'node:test'
import { removePaddedZeros } from '#src/float.js'

test('removePaddedZeros', () => {
	[
		{ input: '1.2', output: '1.2' },
		{ input: '-1.2', output: '-1.2' },
		{ input: '1.20', output: '1.2' },
		{ input: '12.0', output: '12' },
		{ input: '10.10', output: '10.1' },
		{ input: '-10.10', output: '-10.1' },
	].forEach(({ input, output }) => {
		strict.equal(removePaddedZeros(input), output)
	})
})
