const I = require("immutable");
const validate = require("validate.js");

module.exports = function ValidatableRecord(args, rules) {
  const _prototype = I.Record.prototype;
  const _rules = rules || {}

  _prototype._validationErrors = []

  _prototype.validate = function() {
    _prototype._validationErrors =
      (validate(this.toJS(), _rules, { format: "flat" }) || []);
    return !!!_prototype._validationErrors.length
  }

  _prototype.getErrors = function() {
   	return _prototype._validationErrors;
  }

  _prototype.setError = function(error) {
    return _prototype._validationErrors = [error]
  }

  return I.Record(args);
}
