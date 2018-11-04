'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _koaSmart = require('koa-smart');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Route = function (_RouteBase) {
  (0, _inherits3.default)(Route, _RouteBase);

  // static accesses = {
  //   public: -1,
  //   connected: 100,
  //   admin: GROUPS.ADMIN_ID,
  //   client: GROUPS.CLIENT_ID,
  // };

  function Route(params) {
    (0, _classCallCheck3.default)(this, Route);
    return (0, _possibleConstructorReturn3.default)(this, (Route.__proto__ || (0, _getPrototypeOf2.default)(Route)).call(this, params));
  }

  (0, _createClass3.default)(Route, [{
    key: '_addUserInBody',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx, id) {
        var user;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.models.users.getUserById(id || ctx.state.user.id);

              case 2:
                user = _context.sent;

                if (!user) {
                  this.throw(401);
                }
                ctx.body._user = user.dataValues;
                ctx.body._user.password = undefined;
                return _context.abrupt('return', ctx.body._user);

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _addUserInBody(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return _addUserInBody;
    }()
  }, {
    key: 'beforeRoute',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(ctx, infos, next) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _get3.default)(Route.prototype.__proto__ || (0, _getPrototypeOf2.default)(Route.prototype), 'beforeRoute', this).call(this, ctx, infos, next);

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function beforeRoute(_x3, _x4, _x5) {
        return _ref2.apply(this, arguments);
      }

      return beforeRoute;
    }()
  }]);
  return Route;
}(_koaSmart.Route);

exports.default = Route;