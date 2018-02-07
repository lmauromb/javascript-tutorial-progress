# javascript-tutorial-progress

Track my progress through https://javascript.info/

> The JavaScript language

## An introduction

- [x] An Introduction to JavaScript
- [x] Code editors
- [x] Developer console

## JavaScript Fundamentals

- [x] Hello, world!
- [x] Code structure
- [x] The modern mode, "use strict"
- [x] Variables
- [x] Data types
- [x] Type Conversions
- [x] Operators
  - [Read Bitwise Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)
- [x] Comparisons
- [x] Interaction: alert, prompt, confirm
- [x] Conditional operators: if, '?'
- [x] Logical operators
- [x] Loops: while and for
- [x] The "switch" statement
- [x] Functions
- [x] Function expressions and arrows
- [x] JavaScript specials

## Code quality

- [x] Debugging in Chrome
- [x] Coding style
- [x] Comments
- [x] Ninja code
- [x] Automated testing with mocha
- [x] Polyfills

## Objects: the basics

- [x] Objects
- [x] Garbage collection
  - Going deeper:
    - Book *“The Garbage Collection Handbook: The Art of Automatic Memory Management”* (R. Jones et al)
    - V8
      - [A tour of V8: Garbage Collection](http://jayconrod.com/posts/55/a-tour-of-v8-garbage-collection)
      - [V8 blog](http://v8project.blogspot.com/)
      - [Vyacheslav Egorov blog](http://mrale.ph/)
- [x] Symbol type
  - Global Symbols
    - In order to create or read a symbol in the global registry use `Symbol.for(key)`
    - Reverse call to return a name by a global symbol `Symbol.keyFor(sym)`
  - "Hidden" object properties, does not appear in `for..in`
    - Technically, symbols are still accessible by [Object.getOwnPropertySymbols(obj)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols) that allows us to get all symbols, and [Reflect.ownKeys(obj)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys) that returns all keys of an object including symbolic ones
  - There are many system symbols used by JavaScript, accessible as `Symbol.*`
    - Ex. `Symbol.iterator` for [iterables](http://javascript.info/iterable)
    - Ex. `Symbol.toPrimitive` to setup [object-to-primitive conversion](http://javascript.info/object-toprimitive)
- [x] Object methods, "this"
- [x] Object to primitive conversion
  - The *object-to-primitive* conversion is called automatically by many built-in functions and operators that expect a primitive as a value.
  - There is no Object to Boolean primitive conversion, as every object is **true**.
  - For any primitive conversion JavaScript takes a hint, there are 3 types of it:
    - `string` (for string conversions, like `alert`)
    - `number` (for maths)
    - `default` (few operators)
  - The specification describes explicitly which operator uses which hint. There are some cases in where operators "don't know what to expect" and use the `default` hint. Usually for built-in objects the `default` hint is handled the same way `number` is handled, so in practide the last two are merged together.
  - The conversion algorithm is:
    1. Call `obj[Symbol.toPrimitive](hint)` if the method exists,
    2. Otherwise if hint is `string`
      - try `obj.toString()` and `obj.valueOf()`, whatever exists.
    3. Otherwise if hint is `number` or `default`
      - try `obj.valueOf()` and `obj.toString()`, whatever exists.
    - In practice, it's often enough to implement only `obj.toString()` as "catch-all" method for all conversions that return a "human-readable", representation of an object, for logging or debugging purposes.
- [x] Constructor, operator "new"
  - Constructors are regular functions, but there's a common agreement to name them with capital letters first.
  - Constructor functions should only be called using `new`. Such a call implies a creation of empty `this` at the start and returning the populated one at the end.

## Data types

- [x] Methods of primitives
- [x] Numbers
  - Imprecise calculations:
    - In JavaScript, a number is internally represented in 64-bit format [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754-1985). So, there are exactly 64 bits to store a number, `52` of them are used to store the digits, `11` of them store the decimal point (zero for integer numbers), and `1` bit is for the sign.
    - If a number is too big, it would overflow thr 64-bit storare, and potentially giving `Infinity`.
    - Also, because a number is stored in memory in its binary form, fractions like `0.1` and `0.2` are unending fractions. So, `0.1 + 0.2 === 0.3` is falsy.
  - isFinite and isNaN
    - In JavaScript there are two special values that belong to `number`, but are not "normal" numbers, so there are special functions to check them.
    - `Infinity` (and `-Infinity`) is a special numeric value that is grester (less) than anything. `isFinite(number)` converts its argument to a number and returns true if it’s a regular number, not NaN/Infinity/-Infinity. 
    - `NaN` represents an error, the value is unique that it does not equal anything, including `NaN`. `isNaN(number)` converts its argument and test it for being `NaN`.
  - To write big numbers:
    - Append "e" with the zeroes count to the number. Like: `123e6` is `123` with 6 zeroes.
    - A negative number after `"e"` causes the number to be divided by 1 with given zeroes. That’s for one-millionth or such.
  - For different numeral systems:
    - Can write numbers directly in hex (`0x`), octal (`0o`) and binary (`0b`) systems
    - `parseInt(str, base)` parses an integer from any numeral system with base: `2 <= base <= 36`.
    - `num.toString(base)` converts a number to a string in the numeral system with the given `base`.
  - For converting values like `12pt` and `100px` to a number:
    - Use `parseInt/parseFloat` for the “soft” conversion, which reads a number from a string and then returns the value they could read before the error.
  - For fractions:
    - Round using `Math.floor`, `Math.ceil`, `Math.trunc`, `Math.round` or `num.toFixed(precision)`.
    - Make sure to remember there’s a loss of precision when working with fractions.
  - See the [Math](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math) object when you need them. The library is very small, but can cover basic needs.
- [x] Strings
  - There are 3 types of quotes. Backticks allow a string to span multiple lines and embed expressions.
  - Strings in JavaScript are encoded using `UTF 16`.
  - We can use special characters like `\n` and insert letters by their unicode using `\u....`
  - To get a character, use: `[]`.
  - To get a substring, use: `slice` or `substring`.
  - To lowercase/uppercase a string, use: `toLowerCase/toUpperCase`.
  - To look for a substring, use: `indexOf`, or `includes/startsWith/endsWith` for simple checks.
  - To compare strings according to the language, use: `localeCompare`, otherwise they are compared by character codes.
  - Other helpful methods:
    - `str.trim()` – removes (“trims”) spaces from the beginning and end of the string.
    - `str.repeat(n)` – repeats the string `n` times.
    - …and more. See the [manual](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) for details.
- [x] Arrays
- [x] Array methods
- [ ] Iterables
- [ ] Map, Set, WeakMap and WeakSet
- [ ] Object.keys, values, entries
- [ ] Destructuring assignment
- [ ] Date and time
- [ ] JSON methods, toJSON

## Advanced working with functions

- [ ] Recursion and stack
- [ ] Rest parameters and spread operator
- [ ] Closure
- [ ] The old "var"
- [ ] Global object
- [ ] Function object, NFE
- [ ] The "new Function" syntax
- [ ] Scheduling: setTimeout and setInterval
- [ ] Decorators and forwarding, call/apply
- [ ] Function binding
- [ ] Currying and partials
- [ ] Arrow functions revisited

## Objects, classes, inheritance

- [ ] Property flags and descriptors
- [ ] Property getters and setters
- [ ] Prototypal inheritance
- [ ] F.prototype
- [ ] Native prototypes
- [ ] Methods for prototypes
- [ ] Class patterns
- [ ] Classes
- [ ] Class inheritance, super
- [ ] Class checking: "instanceof"
- [ ] Mixins

## Error handling
- [ ] Error handling, "try..catch"
- [ ] Custom errors, extending Error

> Browser: Document, Events, Interfaces

## Document

## Introduction into Events

## Events in details

## Forms, controls

> Additional articles

## Animation

## Frames and windows

## Promises, async/await
