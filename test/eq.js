import { strict } from 'node:assert'
import { test } from 'node:test'
import { eq } from 'arithmetica'

test('operator: equality `eq`', () => {
	for (const { input: { a, b }, output } of [
		{ input: { a: '1', b: '1' }, output: true },
		{ input: { a: '1', b: '2' }, output: false },
		{ input: { a: '1.0', b: '1' }, output: true },
		{ input: { a: '123.4500', b: '123.45' }, output: true },
		{ input: { a: '42', b: '42.0' }, output: true },
		{ input: { a: '-1.2', b: '-1.20' }, output: true },
		{ input: { a: '1.000000000000001', b: '1.000' }, output: false },
		{ input: { a: 1, b: '1' }, output: true },
		{ input: { a: '1', b: '0._9' }, output: true },
		{ input: { a: '1', b: '0' }, output: false },
		{ input: { a: '-2', b: '-1._9' }, output: true },
		{ input: { a: '0', b: '0' }, output: true },
		{ input: { a: '1', b: '1._0' }, output: true },
		{ input: { a: '1', b: '1.0' }, output: true },
		{ input: { a: '2', b: '1.0' }, output: false },
		{ input: { a: '-1', b: '-1.0' }, output: true },
		{ input: { a: '-1.000', b: '-1.0' }, output: true },
	])
		strict.equal(eq(a, b), output)
})
