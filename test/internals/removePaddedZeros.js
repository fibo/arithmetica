import { strict } from 'node:assert'
import { test } from 'node:test'
import { removePaddedZeros } from '#src/internals.js'

  // Remove right padded zeros from non repeating decimals.
 // This function is used only for numbers with mantissa.
// Cases when `bigIntStr` is `'0'` or any other integer are not handled.
test('internal: `removePaddedZeros`', () => {
	for (const { input, output } of [
		{ input: '1.2', output: '1.2' },
		{ input: '-1.2', output: '-1.2' },
		{ input: '1.20', output: '1.2' },
		{ input: '12.0', output: '12' },
		{ input: '10.10', output: '10.1' },
		{ input: '-10.10', output: '-10.1' },
	])
		strict.equal(removePaddedZeros(input), output)
})
