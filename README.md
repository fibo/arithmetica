# arithmetica

> is an implementation of arithmetic operators for Rational numbers

A [Rational](https://en.wikipedia.org/wiki/Rational_number) is a number that can be expressed as a fraction of two integers.
It includes also [repeating decimals](https://en.wikipedia.org/wiki/Repeating_decimal) hence is a super-set of floating point numbers.

## Installation

With [npm](https://www.npmjs.com/) do

```sh
npm install arithmetica
```

This package is implemented with ECMAScript modules. CommonJS is not supported, nor bundle is provided.

If you need a bundle, for example only with floating point operators (i.e. without repeating decimals)
you can do something like.

```sh
git clone git@github.com:fibo/arithmetica.git
cd arithmetica
esbuild --bundle float/index.js --minify --outfile=arithmetica.js
```

It will produce a 1.6kb (minified, not gzipped) _arithmetica.js_ file.

## Usage

```js
import { add } from "arithmetica";

console.log(add("0.1", "0.2")); // '0.3'
```

There is no runtime check on types: consumers are responsible to feed inputs
that are actual `Rational` types, for instance using
[`isRational` type-guard](#isrational).

Notice that if you want only floating point operators, without _repeating decimals_ support, you can do

```js
import { add } from "arithmetica/float";
```

## Types

### Float

A `Float` is a string that expresses a decimal representation of a number, for example:

- "0"
- "1.2"
- "-0.42"

Decimal separator is "." character.
Exponential notation is not allowed.

### Rational

A `Rational` includes every [`Float`](#float) plus *repeating decimals* that are decimal representation of a number whose digits are **periodic**.

A _repeating decimal_ is represented by a string like:

- "0._3": represents fraction `1/3`, that is 0.33333...

## Type guards

### isRational

`isRational(arg: unknown): arg is Rational`

Use `isRational` type-guard to check if some data belongs to `Rational` type.

```ts
import { Rational, isRational, sub } from "arithmetica";

function minusOne (a: string): Rational {
  if (isRational(a)) return sub(a, "1");
  throw new TypeError(`Argument is not a Rational ${a}`);
}
```

Of course it can be used also on an ECMAScript runtime.

```js
import { isRational, mul } from "arithmetica";

function timesTen (a) {
  if (isRational(a)) return mul(a, "10");
  throw new TypeError("Argument is not a Rational");
}
```

## Operators

### eq

`eq(a: Rational, b: Rational): boolean`

Implements equality.

```js
eq("1", "2"); // false
eq("42", "42.0"); // true
```

### neg

`neg(a: Rational): Rational`

Implements negation.

```js
neg("1"); // '-1'
neg("-42"); // '42'
```

### add

`add(a: Rational, b: Rational): Rational`

Implements addition.

### sub

`sub(a: Rational, b: Rational): Rational`

Implements subtraction.

### mul

`mul(a: Rational, b: Rational): Rational`

Implements multiplication.

### div

`div(a: Rational, b: Rational): Rational`

Implements division. It throws `RangeError` if denominator is zero.

```js
console.log(div("-10", "2")); // '-5'

try {
  console.log(div("2", "0");
} catch (err) {
  console.error(err); // RangeError: Division by zero
}
```

## Utils

### floatToNumber

`floatToNumber(floatStr: Float, mantissaLength: number): number`

Converts a `Float` to a `number`.

```js
floatToNumber("42.01", 0); // 42
floatToNumber("1234.56789", 2); // 1234.57
```

### rationalToNumber

`rationalToNumber(rational: Rational, mantissaLength: number): number`

Converts a `Rational` to a `number`.

```js
rationalToNumber("0.10", 1); // 0.1
rationalToNumber("0._3", 8); // 0.33333333
```

## License

[MIT](https://fibo.github.io/mit-license)

