import { strict } from 'node:assert'
import { test } from 'node:test'
import { mul } from 'arithmetica'

test('operator: multiplication `mul`', () => {
	for (const { input: { a, b }, output } of [
		{ input: { a: '1', b: '1' }, output: '1' },
		{ input: { a: '1', b: '0' }, output: '0' },
		{ input: { a: 0.1, b: 0.2 }, output: '0.02' },
		{ input: { a: '0', b: '-12' }, output: '0' },
		{ input: { a: '-12', b: '0' }, output: '0' },
		{ input: { a: '1.0', b: '0.0' }, output: '0' },
		{ input: { a: '1', b: '42' }, output: '42' },
		{ input: { a: '1', b: '42' }, output: '42' },
		{ input: { a: '1.0', b: '42' }, output: '42' },
		{ input: { a: '0.1', b: '0.2' }, output: '0.02' },
		{ input: { a: '-0.1', b: '-0.2' }, output: '0.02' },
		{ input: { a: '2', b: '-3' }, output: '-6' },
		{ input: { a: '1.23', b: '4.56' }, output: '5.6088' },
		{ input: { a: '1.2', b: '2.34' }, output: '2.808' },
		{ input: { a: '1.5', b: '1.5' }, output: '2.25' },
		{ input: { a: '1.0', b: '4' }, output: '4' },
		{ input: { a: 2, b: '3' }, output: '6' },
		{
			input: { a: '0.0000714939', b: '1425786' },
			output: '101.9350017054'
		},
		{
			input: { a: '0.0000017', b: '0.0000017' },
			output: '0.00000000000289'
		},
		{
			input: { a: '0.00000000237457904', b: '-892315' },
			output: '-0.0021188724960776'
		},
		{
			input: { a: '0.00000000000192902409442', b: '289522860.5' },
			output: '0.00055849657378990048841'
		},
		{
			input: { a: '0.000000000003271187802', b: '0' },
			output: '0'
		},
		{
			input: { a: '12.95933', b: '209420271.72' },
			output: '2713946409.9091476'
		},
		{
			input: { a: '124616457', b: '513907736' },
			output: '64041361285211352'
		},
		{
			input: { a: '0.000086866', b: '-103057641552' },
			output: '-8952205.091056032'
		},
		{ input: { a: '0._3', b: '0.3' }, output: '0.1' },
		{ input: { a: '0._3', b: '3' }, output: '1' },
		{ input: { a: '0._1', b: '0._1' }, output: '0._012345679' },
		{ input: { a: '0._1', b: '0' }, output: '0' },
		{ input: { a: '0', b: '0._1' }, output: '0' },
		{ input: { a: '-0._1', b: '0' }, output: '0' },
		{ input: { a: '0', b: '-0._1' }, output: '0' },
		{ input: { a: '0.12_34', b: '0' }, output: '0' },
		{ input: { a: '0', b: '0.12_34' }, output: '0' },
		{ input: { a: '-0.12_34', b: '0' }, output: '0' },
		{ input: { a: '0', b: '-0.12_34' }, output: '0' },
		{ input: { a: '0._1', b: '1' }, output: '0._1' },
		{ input: { a: '1', b: '0._1' }, output: '0._1' },
		{ input: { a: '-0._1', b: '1' }, output: '-0._1' },
		{ input: { a: '1', b: '-0._1' }, output: '-0._1' },
		{ input: { a: '0.12_34', b: '1' }, output: '0.12_34' },
		{ input: { a: '1', b: '0.12_34' }, output: '0.12_34' },
		{ input: { a: '-0.12_34', b: '1' }, output: '-0.12_34' },
		{ input: { a: '1', b: '-0.12_34' }, output: '-0.12_34' },
	])
		strict.equal(mul(a, b), output)
})
