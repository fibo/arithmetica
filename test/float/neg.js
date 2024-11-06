import { strict } from 'node:assert'
import { test } from 'node:test'
import { neg } from '#src/float.js'

export const negFloatTestData = [
	{ input: '1', output: '-1' },
	{ input: '-42', output: '42' },
	{ input: '-1.23', output: '1.23' },
	{ input: '0', output: '0' },
	{ input: 0, output: 0 },
	{ input: 1, output: -1 },
	{ input: 1n, output: -1n },
]

test('Float negation', () => {
	negFloatTestData.forEach(({ input, output }) => {
		strict.equal(neg(input), output)
	})
})
