import { strict as assert } from "node:assert";
import { describe, it } from "node:test";
import { add } from "../../operators.js";

describe("add", () => {
	it("implements addition", () => {
		[
			{
				input: { a: "1", b: "1" },
				output: "2",
			},
			{
				input: { a: "1", b: "0" },
				output: "1",
			},
			{
				input: { a: "0.1", b: "0.2" },
				output: "0.3",
			},
			{
				input: { a: "-0.1", b: "-0.2" },
				output: "-0.3",
			},
			{
				input: { a: "1.23", b: "4.56" },
				output: "5.79",
			},
			{
				input: { a: "1.2", b: "2.34" },
				output: "3.54",
			},
			{
				input: { a: "1.5", b: "1.5" },
				output: "3",
			},
			{
				input: { a: "0.0000023432495704937", b: "-0.0000023432495704937" },
				output: "0",
			},
			{
				input: { a: "-999.99", b: "0.01" },
				output: "-999.98",
			},
			{
				input: { a: "3.333", b: "-4" },
				output: "-0.667",
			},
			{
				input: { a: "43534.5435", b: "0.054645" },
				output: "43534.598145",
			},
			{
				input: { a: "4.2", b: "-0.000000062" },
				output: "4.199999938",
			},
			{
				input: { a: "0.00000000000000000016", b: "-2" },
				output: "-1.99999999999999999984",
			},
			{
				input: { a: "6", b: "3.86" },
				output: "9.86",
			},
			{
				input: { a: "0", b: "-8.59" },
				output: "-8.59",
			},
			{
				input: { a: "-1", b: "-505" },
				output: "-506",
			},
			// {
			// 	input: {
			// 		a: "-2807730637205.01726166308462171615083",
			// 		b: "0.0000000000000000000622355365575749096529347607937593112149767278"
			// 	},
			// 	output: "-2807730637205.0172616630846217160885944634424250903470652392062406887850232722",
			// },
		].forEach(({ input: { a, b }, output }) => {
			assert.equal(add(a, b), output);
		});
	});
});
