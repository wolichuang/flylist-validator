'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _toDate = _interopRequireDefault(require('./lib/toDate'));

var _isEmail = _interopRequireDefault(require('./lib/isEmail'));

var _isURL = _interopRequireDefault(require('./lib/isURL'));

var _isMobilePhone = _interopRequireDefault(require('./lib/isMobilePhone'));

var _isMimeType = _interopRequireDefault(require('./lib/isMimeType'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var validator = {
  toDate: _toDate.default,
  isEmail: _isEmail.default,
  isURL: _isURL.default,
  isMobilePhone: _isMobilePhone.default,
  isMimeType: _isMimeType.default
};
var _default = validator;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;
