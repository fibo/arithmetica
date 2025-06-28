# arithmetica

> is an implementation of arithmetic operators for Rational numbers

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

It may have [repeating decimals](https://en.wikipedia.org/wiki/Repeating_decimal), when the number of decimal digits in the decimal representation is **infinite and periodic**. For example `1/3` is `0.33333...`.

## Types

The `Rational` type is a string that represents a rational number, where:

  - Decimal separator is `.` character.
  - Exponential notation is not allowed. Values like `'1e3'` or `'1.2e-3'` are not valid.
  - Integer part can be omitted. Values like `'.5'` or `'-.5'` are valid.
  - Strings can be arbitrary long; the only limits are your computer's memory and the BigInt implementation.

Examples of (finite) rational numbers:
  - `'1'`
  - `'-12'`
  - `'1.23456789'`

A _repeating decimal_ is represented by a string like,

```
<Integer>.<DecimalFixedPart>_<DecimalRepeatingPart>
```

For example:
  - `'0._6'`: the fraction 1/6, that is 0.666666666666...
  - `'-1.23_456'`: the number -1.23456456456456...


The `MaybeRational` type is the union of types that can be coerced to a `Rational`, i.e. `string`, `number` and `bigint`.


The `Rational` type is used by operators as return type.
The `MaybeRational` types is used by operators as argument.

## Features

You probably already aware of _floating point issues_ such as `0.1 + 0.2 != 0.3` or `0.1 * 0.2 != 0.02`; this occurs in JavaScript as well as many other languages.
Operators in the `arithmetica` package implement arbitrary-precision arithmetic. For example:

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
add('0._3', 1); // '1._3'
```

## Operators

- Equality: `eq(a: MaybeRational, b: MaybeRational): boolean`
- Addition: `add(a: MaybeRational, b: MaybeRational): Rational`
- Subtraction: `sub(a: MaybeRational, b: MaybeRational): Rational`
- Negation: `neg(a: MaybeRational): Rational`
- Multiplication: `mul(a: MaybeRational, b: MaybeRational): Rational`
- Division: `div(a: MaybeRational, b: MaybeRational): Rational`
- Inversion: `inv(a: MaybeRational): Rational`
- Less than: `lt(a: MaybeRational, b: Rational): boolean`
- Greater than: `gt(a: MaybeRational, b: MaybeRational): boolean`

## Utils

### coerceToRational

Validates the argument and converts it to `Rational`

```
coerceToRational(arg: MaybeRational): Rational
```

### isRational

Type guard. Check that the given argument is a valid `Rational`.

```
isRational(arg: unknown): arg is Rational
```

### rationalToNumber

Converts a `Rational` to a number. The `numDecimals` defaults to 16.

```
rationalToNumber(arg: Rational, numDecimals?: number): number
```

## License

[MIT](https://fibo.github.io/mit-license)
