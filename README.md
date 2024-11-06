# arithmetica

> is an implementation of arithmetic operators for Rational numbers

A [Rational](https://en.wikipedia.org/wiki/Rational_number) is a number that can be expressed as a fraction of two integers.
It includes also [repeating decimals](https://en.wikipedia.org/wiki/Repeating_decimal) hence is a super-set of floating point numbers.

**ToC**

- [Installation](#installation)
- [Usage](#usage)
- Types:
  - [Float](#float)
  - [Rational](#rational)
- Type guards:
  - [isFloat](#isfloat)
  - [isRational](#isrational)
- Operators:
  - [eq](#eq): equality
  - [add](#add): addition
  - [sub](#sub): subtraction
  - [neg](#neg): negation
  - [mul](#mul): multiplication
  - [div](#div): division
  - [inv](#inv): inversion
  - [lt](#lt): less than
  - [gt](#gt): greater than
- Utils:
  - [coerceToFloat](#coercetofloat)
  - [coerceToRational](#coercetorational)
  - [rationalToNumber](#rationaltonumber)
- [License](#license)

## Installation

With [npm](https://www.npmjs.com/) do

```sh
npm install arithmetica
```

This package is implemented with ECMAScript modules. CommonJS is not supported.

No dependencies are used at all.

## Usage

```js
import { add } from 'arithmetica';

add('1', '2'); // '3'

// Here 0._3 represents 0.3333333333333333...
add('0._3', '1')); // '1._3'
```

**NOTA BENE**: there is no runtime check on types! Consumers are responsible to feed inputs
that are actual `Rational` types, for instance using [`isRational` type-guard](#isrational).

If you do not need _repeating decimals_ you can import only floating point operators with something like

```js
import { add } from 'arithmetica/float';

add('0.1', '0.2'); // '0.3'
```

The size of a bundle minified with _esbuild_ including only `arithmetica/float` is 1.9kb only.

## Types

### Float

A `Float` is a string that expresses a decimal representation of a number.

- Decimal separator is `.` character.
- Exponential notation is not allowed.
- Integer part can be omitted.

For example:

- '0'
- '1.2'
- '-0.42'
- '.123'


### Rational

A `Rational` includes every [`Float`](#float) plus *repeating decimals* that are decimal representation of a number whose digits are **periodic**.

A _repeating decimal_ is represented by a string like:

- '0._3': represents fraction `1/3`, that is 0.33333...
- '0.123_456': represents number 0.123456456456456456456456...

## Type guards

### isFloat

`isFloat(arg: unknown): arg is Float`

Use `isFloat` type-guard to check if some value belongs to `Float` type.

```ts
import { Float, isFloat, sub } from 'arithmetica/float';

function minusOne (a: string | number | bigint): Float {
  if (isFloat(String(a))) return sub(a, '1');
  throw new TypeError(`Argument is not a Float ${a}`);
}
```

Of course it can be used also on an ECMAScript runtime.

```js
import { isFloat, mul } from 'arithmetica/float';

function timesTen (a) {
  if (isFloat(a)) return mul(a, '10');
  throw new TypeError('Argument is not a Float');
}
```

### isRational

`isRational(arg: unknown): arg is Rational`

Use `isRational` type-guard to check if some data belongs to `Rational` type.

```ts
import { Rational, isRational, add } from 'arithmetica';

function plusOneThird (a: string | number | bigint): Rational {
  if (isRational(String(a))) return add(a, '0._3');
  throw new TypeError(`Argument is not a Rational ${a}`);
}
```

## Operators

Every operator imported from `arithmetica/float` has the same signature as its homonym operator imported from `arithmetica`, but of course with type `Float` instead of a `Rational` in its signature.

### eq

> Implements _equality_ operator.

`eq(a: Rational | number | bigint, b: Rational | number | bigint): boolean`

```js
import { eq } from 'arithmetica';

eq('1', '2'); // false
eq('42', '42.0'); // true
```

### add

> Implements _addition_ operator.

`add(a: Rational | number | bigint, b: Rational | number | bigint): Rational`

```js
import { add } from 'arithmetica';

add('1', '2'); // '3'
add('0._1', '0._1'); // '0._2' i.e. 0.2222222...
add('0._1', '0._8'); // '1'
```

### sub

> Implements _subtraction_ operator.

`sub(a: Rational | number | bigint, b: Rational | number | bigint): Rational`

```js
import { sub } from 'arithmetica';

sub('1', '2'); // '-1'
sub('0._1', '0._1'); // '0'
sub('1', '0._1'); // '0._8'
```

### neg

> Implements _negation_ operator.

`neg(a: Rational | number | bigint): Rational`

```js
import { neg } from 'arithmetica';

neg('1'); // '-1'
neg('-42'); // '42'
```

### mul

> Implements _multiplication_ operator.

`mul(a: Rational | number | bigint, b: Rational | number | bigint): Rational`

```js
import { mul } from 'arithmetica';

mul('2', '-3'); // '-6'
mul('0._3', '0.3'); // '0.1'
```

### div

> Implements _division_ operator.

`div(a: Rational | number | bigint, b: Rational | number | bigint): Rational`

It throws an error if denominator is zero.

```js
import { div } from 'arithmetica';

div('-10', '2'); // '-5'

try {
  div('2', '0');
} catch (err) {
  console.error(err); // Error: Division by zero
}
```

### inv

> Implements _inversion_ operator.

`inv(a: Rational | number | bigint): Rational`

```js
import { inv } from 'arithmetica';

inv('2'); // '0.5'
inv('1._1'); // '9'
```

### lt

> Implements _less then_ operator.

`lt(a: Rational | number | bigint, b: Rational | number | bigint): boolean`

```js
import { lt } from 'arithmetica';

lt('-2', '1'); // true
```

Notice that `lt` is not implemented by `arithmetica/float`: use the `<` operator.

### gt

> Implements _greater then_ operator.

`gt(a: Rational | number | bigint, b: Rational | number | bigint): boolean`

```js
import { gt } from 'arithmetica';

gt('-2', '1'); // false
gt('42', '24'); // true
```

Notice that `gt` is not implemented by `arithmetica/float`: use the `>` operator.

## Utils

### rationalToNumber

> Converts a `Rational` to a `number`.

`rationalToNumber(rational: Rational, mantissaLen?: number): number`

Notice that `mantissaLen` argument is optional:
it set the number of digits of the decimal part, max is 16.
Output is rounded.

```js
import { rationalToNumber } from 'arithmetica';

rationalToNumber('0.10'); // 0.1
rationalToNumber('0._3', 8); // 0.33333333
rationalToNumber('0.456', 2); // 0.46
```

## License

[MIT](https://fibo.github.io/mit-license)

