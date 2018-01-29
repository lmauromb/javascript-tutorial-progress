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
- [ ] Object to primitive conversion
- [ ] Constructor, operator "new"

## Data types

- [ ] Methods of primitives
- [ ] Numbers
- [ ] Strings
- [ ] Arrays
- [ ] Array methods
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
