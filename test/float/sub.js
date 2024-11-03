import { strict as assert } from 'node:assert'
import { describe, test } from 'node:test'
import { sub } from '#src/float.js'

export const subFloatTest = {
	message: 'implements Float subtraction operator',
	data: [
		{ input: { a: '1', b: '1' }, output: '0' },
		{ input: { a: '1', b: '0' }, output: '1' },
		{ input: { a: '0.1', b: '0.2' }, output: '-0.1' },
		{ input: { a: '-0.1', b: '-0.2' }, output: '0.1' },
		{ input: { a: '1.23', b: '4.56' }, output: '-3.33' },
		{ input: { a: '1.2', b: '2.34' }, output: '-1.14' },
		{ input: { a: '-1.5', b: '0.5' }, output: '-2' },
		{ input: { a: '-0.00000020', b: '-1.5' }, output: '1.4999998' },
		{ input: { a: '2.3', b: '-3' }, output: '5.3' },
		{
			input: { a: '0.0000023432495704937', b: '-0.0000023432495704937' },
			output: '0.0000046864991409874'
		},
		{
			input: { a: '43534.5435', b: '0.054645' },
			output: '43534.488855'
		},
		{
			input: {
				a: '0.00000000000047867734749297313578318166203844289133575435501552',
				b: '5318894.3577269473404992938443574038899509659386283'
			},
			output: '-5318894.35772694734002061649686443075416778427658985710866424564498448'
		},
		{
			input: {
				a: '0.0000000000000000003167303237768130560',
				b: '-1774472.102377282878491377352513811904'
			},
			output: '1774472.102377282878491377669244135680813056'
		},
		{
			input: {
				a: '1230427083.97',
				b: '0.000758744063330274578234716889288876558038637793691373850'
			},
			output: '1230427083.96924125593666972542176528311071112344196136220630862615'
		},
	]
}

describe('sub', () => {
	test(subFloatTest.message, () => {
		subFloatTest.data.forEach(({ input: { a, b }, output }) => {
			assert.equal(sub(a, b), output)
		})
	})
})
