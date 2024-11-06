import { strict } from 'node:assert'
import { test } from 'node:test'
import { inv } from '#src/float.js'

export const invFloatTestData = [
	{ input: '1', output: '1' },
	{ input: '2', output: '0.5' },
]

test('Float inversion', () => {
	invFloatTestData.forEach(({ input, output }) => {
		strict.equal(inv(input), output)
	})
})

export const invFloatThrowsErrorTestData = [
	{ input: '0', error: { name: 'RangeError' } }
]

test('Float inversion throws if input is zero', () => {
	invFloatThrowsErrorTestData.forEach(({ input, error }) => {
		strict.throws(() => { inv(input) }, error)
	})
})

