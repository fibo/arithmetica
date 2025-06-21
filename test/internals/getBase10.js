import { strict } from 'node:assert'
import { test } from 'node:test'
import { getBase10 } from '#src/internals.js'

test('internal: `getBase10`', () => {
	for (const { input, output } of [
		{ input: '0', output: { integer: 0n, exponent: 0n } },
		{ input: '1.2', output: { integer: 12n, exponent: 1n } },
		{ input: '-123.45', output: { integer: -12345n, exponent: 2n } },
		{ input: 4.2, output: { integer: 42n, exponent: 1n } },
		{ input: 42n, output: { integer: 42n, exponent: 0n } },
	]) {
		const [integer, exponent] = getBase10(input)
		strict.equal(integer, output.integer)
		strict.equal(exponent, output.exponent)
	}
})
