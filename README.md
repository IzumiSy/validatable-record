# validatable-record
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
> Immutable.js Record powered with validate.js

## Table of Contents
- [Usage](README.md#Usage)
- [Contribute](README.md#Contribute)
- [License](README.md#License)

## Install
```bash
$ npm install --save validatable-record
```

## Usage
Usage is almost the same as `Record` in Immutable.js, but it has the power of `validate.js`. With ValidatableRecord, you can define models with built-in validation logic.
```js
const ManRecord = ValidatableRecord({
  name: null,
  age: null
}, {
  name: {
    presence: true
  },
  age: {
    presence: {
      message: "is invalid"
    }
  }
});

class Man extends ManRecord {
  ...
}

const man = new Man({
  name: "Justine";
  age: 25
});

man.validate()
// == true

const agelessMan = new Man({
  name: "Michael"
});

agelessMan.validate()
// == false

agelessMan.getErrors()
// == [ "Age is invalid" ]
```

## Test
```bash
$ npm test
```

## Contribute
PRs accepted.

## License
The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
