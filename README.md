# arithmetica

> is an implementation of arithmetic operators for Rational numbers

A [Rational](https://en.wikipedia.org/wiki/Rational_number) is a number that can be expressed as a fraction of two integers.
It includes also [repeating decimals](https://en.wikipedia.org/wiki/Repeating_decimal) hence is a super-set of floating point numbers.

**ToC**

- [Installation](#installation)
- [Rational type](#rational-type)
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

## Rational type

A `Rational` can be:
- a number
- a bigint
- a string that expresses a decimal representation of a number

If it is a number it must be finite and valid (`Infinity` is not a `Rational`, of course `NaN` neither).

For example:
- `1`
- `2`
- `0.5`
- `-12`

In case it is a string it expresses a decimal representation of a number, where:
- Decimal separator is `.` character.
- Exponential notation is not allowed.
- Integer part can be omitted.

For example:

- `'0'`
- `'1.2'`
- `'-0.42'`
- `'.123'`


A `Rational` also includes *repeating decimals* that are decimal representation of a number whose digits are **periodic**.

A _repeating decimal_ is represented by a string like:

- `'0._3'`: the fraction 1/3, that is 0.33333...
- `'0.123_456'`: the number 0.123456456456456...

## Features

You probably already know the _floating point issue_ so `0.1 + 0.2 != 0.3` or `0.1 * 0.2 != 0.02`; it happens JavaScript as well as many other languages.
Operators in `arithmetica` package implement arbitrary precision arithmetic, for example

```js
import { add, mul } from 'arithmetica';

add(0.1, 0.2); // '0.3'
mul(0.1, 0.2); // '0.02'
```

Arguments are coerced, you can pass a number, bigint or string.

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

- `eq(a: Rational, b: Rational): boolean`: _equality_ operator
- `add(a: Rational, b: Rational): Rational`: _addition_ operator
- `sub(a: Rational, b: Rational): Rational`: _subtraction_ operator
- `neg(a: Rational): Rational`: _negation_ operator
- `mul(a: Rational, b: Rational): Rational`: _multiplication_ operator
- `div(a: Rational, b: Rational): Rational`: _division_ operator
- `inv(a: Rational): Rational`: _inversion_ operator
- `lt(a: Rational, b: Rational): boolean`: _less than_ operator
- `gt(a: Rational, b: Rational): boolean`: _greater than_ operator

## Utils

- `isRational(arg: unknown): arg is Rational`: type guard. Check that given argument is a `Rational`.
- `rationalToNumber(arg: Rational, numDecimals?: number): number`: convert a `Rational` to number. The `numDecimals` defaults to 16.


## License

[MIT](https://fibo.github.io/mit-license)

