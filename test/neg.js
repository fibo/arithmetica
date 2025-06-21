import { strict } from 'node:assert'
import { test } from 'node:test'
import { neg } from 'arithmetica'

test('operator: negation `neg`', () => {
	for(const { input, output } of [
		{ input: '1', output: '-1' },
		{ input: '-42', output: '42' },
		{ input: '-1.23', output: '1.23' },
		{ input: '0', output: '0' },
		{ input: 0, output: 0 },
		{ input: 1, output: -1 },
		{ input: 1n, output: -1n },
		{ input: '0.12_34', output: '-0.12_34' },
		{ input: '-0.12_34', output: '0.12_34' },
	])
		strict.equal(neg(input), output)
})
