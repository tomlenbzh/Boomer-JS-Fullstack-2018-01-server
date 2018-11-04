'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _utils = require('koa-smart/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _instance = null;

var Crypto = function () {
  function Crypto() {
    (0, _classCallCheck3.default)(this, Crypto);

    this.lengthPassword = 10;
  }

  (0, _createClass3.default)(Crypto, [{
    key: 'encryptPassword',
    value: function encryptPassword(password) {
      return _bcryptjs2.default.hashSync(password, this.lengthPassword);
    }
  }, {
    key: 'compartPassword',
    value: function compartPassword(password, passwordEncrypt) {
      return _bcryptjs2.default.compareSync(password, passwordEncrypt);
    }
  }, {
    key: 'generatePassword',
    value: function generatePassword() {
      return Math.random().toString(36).slice(-8);
    }
  }, {
    key: 'generateToken',
    value: function generateToken() {
      return _crypto2.default.randomBytes(128).toString('base64');
    }
  }, {
    key: 'generateFileName',
    value: function generateFileName() {
      return new Date().getTime() + '__' + _crypto2.default.randomBytes(32).toString('hex');
    }
  }, {
    key: 'generateJwtToken',
    value: function generateJwtToken(data) {
      return _utils.jsonwebtoken.sign(data, _config2.default.jsonwebtoken.privateKey);
    }
  }, {
    key: 'getDataJwtToken',
    value: function getDataJwtToken(token) {
      try {
        return _utils.jsonwebtoken.verify(token, _config2.default.jsonwebtoken.privateKey);
      } catch (error) {
        return null;
      }
    }
  }], [{
    key: 'instance',
    get: function get() {
      if (_instance === null) {
        _instance = new Crypto();
      }
      return _instance;
    }
  }]);
  return Crypto;
}();

exports.default = Crypto;