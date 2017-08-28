const test = require('ava');
const I = require('immutable');
const _ = require('underscore');
const ValidatableRecord = require('../index');

const Record = ValidatableRecord({
  name: null,
  age: null
}, {
  name: {
    presence: {
      message: 'is invalid'
    }
  },
  age: {
    presence: {
      message: 'is invalid'
    }
  }
})

test('validate method returns true if the object is valid', (t) => {
  const record = new Record({
    name: "Justine", age: 10
  });

  t.is(record.validate(), true)
})

test('validate method returns false if the object is not valid', (t) => {
  const record = new Record({
    name: "Justine"
  });

  t.is(record.validate(), false)
});

test('getErrors method returns errors of validations', (t) => {
  const record = new Record({
    name: "Justine"
  });

  const errors = record.getErrors()

  t.true(errors.length > 0)
  t.is(_.first(errors), 'Age is invalid')
});

