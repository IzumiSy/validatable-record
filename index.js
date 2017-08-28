const I = require("immutable");
const validate = require("validate.js");

export.default = function ValidatableRecord(args, rules = {}) {
  const _prototype = I.Record.prototype;

  _prototype._validationErrors = []
  _prototype.validate = function() {
    _prototype._validationErrors =
      (validate(this.toJS(), rules, { format: "flat" }) || []);
    return !!!_prototype._validationErrors.length
  }
  _prototype.getErrors = function() {
   	return _prototype._validationErrors;
  }

  return I.Record(args);
}
