'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppModelManager = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _ModelManager2 = require('../base/models/ModelManager');

var _ModelManager3 = _interopRequireDefault(_ModelManager2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _instance = null;

var AppModelManager = exports.AppModelManager = function (_ModelManager) {
  (0, _inherits3.default)(AppModelManager, _ModelManager);

  function AppModelManager() {
    (0, _classCallCheck3.default)(this, AppModelManager);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AppModelManager.__proto__ || (0, _getPrototypeOf2.default)(AppModelManager)).call(this));

    _this.path = __dirname;
    return _this;
  }

  (0, _createClass3.default)(AppModelManager, null, [{
    key: 'instance',
    get: function get() {
      if (_instance === null) {
        _instance = new AppModelManager();
      }
      return _instance;
    }
  }]);
  return AppModelManager;
}(_ModelManager3.default);

exports.default = AppModelManager.instance;