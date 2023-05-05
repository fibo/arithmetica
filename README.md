# arithmetica

> is an implementation of arithmetic operators for Rational numbers

A `RationalNumber` is any number that can be expressed by a fraction.
It is represented by a string, for example:

- "0"
- "1.2"
- "-0.42"

## Usage

```js
import { add } from "arithmetica";

console.log(add("0.1", "0.2")); // 0.3
```
The following binary operators are available:

- `eq`: implements equality.
- `add`: implements addition.
- `sub`: implements subtraction.
- `mul`: implements multiplication.
- `div`: implements division.

There is no runtime check on types, consumers are responsible to feed inputs
that are actual `RationalNumber` types using [`isRationalNumber` type-guard](#isrationalnumber).

## API

### `isRationalNumber(arg: unknown): arg is RationalNumber`

An `isRationalNumber` type-guard is available.

```ts
import { isRationalNumber, sub } from "arithmetica";

function minusOne (a: string): RationalNumber {
  if (isRationalNumber(a)) return sub(a, "1");
  throw new TypeError(`Argument is not a RationalNumber ${a}`);
}
```

Of course it can be used also on an EcmaScript runtime.

```js
import { isRationalNumber, sub } from "arithmetica";

function minusOne (a) {
  if (isRationalNumber(a)) return sub(a, "1");
  throw new TypeError(`Argument is not a RationalNumber ${a}`);
}
```

### `rationalNumberToFloat(rationalNumber: RationalNumber, mantissaLength: number): number`

Convert a `RationalNumber` to a floating point number.

```js
rationalNumberToFloat("42.0", 0); // 42
```

## License

[MIT](https://fibo.github.io/mit-license)

