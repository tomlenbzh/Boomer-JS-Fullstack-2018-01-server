'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _instance = null;

// __ is here to let gettext parse the string to put them on .po file
var __ = function __(string) {
  return string;
};

var Validator = function () {
  function Validator() {
    (0, _classCallCheck3.default)(this, Validator);

    this.validators = {
      email: {
        regex: '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
        msg: __('Invalid email')
      },
      phone: {
        regex: '\\+[1-9]{1}[0-9]{0,2} [0-9]{1}[0-9 ]{6,20}',
        msg: __('Invalide phone')
      },
      password: {
        regex: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{6,10}',
        msg: __('Invalide password: Minimum 6 and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:')
      },
      name: {
        regex: '.{2,80}',
        msg: __('The name must contain between 2 and 80 characters')
      },
      url: {
        regex: '(https?:\\/\\/(?:www\\.|(?!www))[^\\s\\.]+\\.[^\\s]{2,}|www\\.[^\\s]+\\.[^\\s]{2,})',
        msg: __('Invalide URL. Ex: https://google.com ou http://google.com')
      }
    };
  }

  (0, _createClass3.default)(Validator, [{
    key: 'put',
    value: function put(_ref) {
      var key = _ref.key,
          regex = _ref.regex,
          _ref$msg = _ref.msg,
          msg = _ref$msg === undefined ? __('Invalide field') : _ref$msg;

      this.validators[key] = {
        regex: regex,
        msg: msg
      };
      return this.get(key);
    }
  }, {
    key: 'get',
    value: function get(key) {
      return (0, _extends3.default)({}, this.validators[key], {
        args: new RegExp(this.validators[key].regex)
      });
    }
  }], [{
    key: 'instance',
    get: function get() {
      if (_instance === null) {
        _instance = new Validator();
      }
      return _instance;
    }
  }]);
  return Validator;
}();

exports.default = Validator;