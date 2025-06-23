# arithmetica

> is an implementation of arithmetic operators for Rational numbers

A [Rational](https://en.wikipedia.org/wiki/Rational_number) is a number that can be expressed as a fraction of two integers.
It includes also [repeating decimals](https://en.wikipedia.org/wiki/Repeating_decimal) hence is a super-set of floating point numbers.

**ToC**

- [Installation](#installation)
- [Rational numbers](#rational-numbers)
- [Types](#types)
- [Features](#features)
- [Operators](#operators)
- [Utils](#utils)
- [License](#license)

## Installation

With [npm](https://www.npmjs.com/) do

```sh
npm install arithmetica
```

This package is implemented with ECMAScript modules. CommonJS is not supported.

No dependencies are used at all.

## Rational numbers

In Mathematics a [Rational number](https://en.wikipedia.org/wiki/Rational_number) is a number that can be expressed as a fraction of two integers, that is `a/b` where _a_ and _b_ are integers and _b_ is not zero.

A _Rational_ number can be represented by a string, for example:
- `'1'`
- `'-12'`
- `'0.5'`

The number of decimal digits in the decimal representation of a rational number can be infinite but periodic (repeating decimal). For example `1/3` is `0.33333...`.

## Types

The `Rational` type is a string that represents a rational number, where:
- Decimal separator is `.` character.
- Exponential notation is not allowed. Values like `'1e3'` or `'1.2e-3'` are not valid.
- Integer part can be omitted. Values like `'.5'` or `'-.5'` are valid.
- A _repeating decimal_ is represented by a string like:
    - `'0._6'`: the fraction 1/6, that is 0.666666666666...
    - `'1.23_456'`: the number 1.23456456456456...

The `MaybeRational` type is the union of types that can be coerced to a `Rational`, i.e. `string`, `number` and `bigint`.

## Features

You probably already know the _floating point issue_ so `0.1 + 0.2 != 0.3` or `0.1 * 0.2 != 0.02`; it happens JavaScript as well as many other languages.
Operators in `arithmetica` package implement arbitrary precision arithmetic, for example

```js
import { add, mul } from 'arithmetica';

add(0.1, 0.2); // '0.3'
mul(0.1, 0.2); // '0.02'
```

Arguments are coerced, you can pass a `number`, `bigint` or `string`.

```js
add('1', 2n); // '3'
```

You can deal with _repeating decimals_.

```js
import { add, div } from 'arithmetica';

div(1, 3); // '0._3'
add('0._3', 1)); // '1._3'
```

## Operators

- `eq(a: MaybeRational, b: MaybeRational): boolean`: _equality_ operator
- `add(a: MaybeRational, b: MaybeRational): Rational`: _addition_ operator
- `sub(a: MaybeRational, b: MaybeRational): Rational`: _subtraction_ operator
- `neg(a: MaybeRational): Rational`: _negation_ operator
- `mul(a: MaybeRational, b: MaybeRational): Rational`: _multiplication_ operator
- `div(a: MaybeRational, b: MaybeRational): Rational`: _division_ operator
- `inv(a: MaybeRational): Rational`: _inversion_ operator
- `lt(a: MaybeRational, b: Rational): boolean`: _less than_ operator
- `gt(a: MaybeRational, b: MaybeRational): boolean`: _greater than_ operator

## Utils

- `coerceToRational(arg: MaybeRational): Rational`: Validate argument and convert to `Rational`.
- `isRational(arg: unknown): arg is Rational`: type guard. Check that given argument is a `RationalValue`.
- `rationalToNumber(arg: string, numDecimals?: number): number`: convert a `Rational` to a number. The `numDecimals` defaults to 16.


## License

[MIT](https://fibo.github.io/mit-license)

