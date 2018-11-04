'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crypto = exports.validator = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _utils = require('koa-smart/utils');

var _Crypto = require('./Crypto');

var _Crypto2 = _interopRequireDefault(_Crypto);

var _utils2 = require('./utils');

var utils = _interopRequireWildcard(_utils2);

var _Validator = require('./Validator');

var _Validator2 = _interopRequireDefault(_Validator);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validator = exports.validator = _Validator2.default.instance;
var crypto = exports.crypto = _Crypto2.default.instance;

exports.default = (0, _extends3.default)({}, _utils.utilsParam, utils, {
  crypto: crypto,
  validator: validator
});