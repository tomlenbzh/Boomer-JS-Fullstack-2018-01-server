'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2;

var _Route2 = require('./Route');

var _Route3 = _interopRequireDefault(_Route2);

var _utils = require('../base/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var RouteAuths = (_dec = _Route3.default.Route({
  routeBase: 'auths'
}), _dec2 = _Route3.default.Post({
  params: {
    pseudo: false,
    password: true,
    password_confirmation: true
  }
}), _dec3 = _Route3.default.Post({
  params: {
    pseudo: {
      __force: true,
      __func: [_utils2.default.trim]
    },
    password: {
      __force: true,
      __func: [_utils2.default.trim]
    }
  }
}), _dec4 = _Route3.default.Get({}), _dec(_class = (_class2 = function (_Route) {
  (0, _inherits3.default)(RouteAuths, _Route);

  function RouteAuths(params) {
    (0, _classCallCheck3.default)(this, RouteAuths);
    return (0, _possibleConstructorReturn3.default)(this, (RouteAuths.__proto__ || (0, _getPrototypeOf2.default)(RouteAuths)).call(this, (0, _extends3.default)({}, params, { model: 'users' })));
  }

  (0, _createClass3.default)(RouteAuths, [{
    key: 'signup',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx) {
        var body, user, userInBody;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(ctx.request.body);
                body = ctx.request.body;

                if (body.password_confirmation !== body.password) {
                  this.throw(400, ctx.state.__('Different password'));
                }
                _context.next = 5;
                return this.model.create((0, _extends3.default)({}, body));

              case 5:
                user = _context.sent;
                _context.next = 8;
                return this._addUserInBody(ctx, user.id);

              case 8:
                userInBody = _context.sent;

                this.sendCreated(ctx, userInBody, ctx.state.__('Your account has been created'));

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function signup(_x) {
        return _ref.apply(this, arguments);
      }

      return signup;
    }()
  }, {
    key: 'login',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(ctx) {
        var _ctx$request$body, pseudo, password, user, userInBody;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _ctx$request$body = ctx.request.body, pseudo = _ctx$request$body.pseudo, password = _ctx$request$body.password;
                _context2.next = 3;
                return this.model.findOne({ where: { pseudo: pseudo } });

              case 3:
                user = _context2.sent;

                if (user && _utils.crypto.compartPassword(password, user.password)) {
                  delete user.dataValues.password;
                } else {
                  this.throw(401, ctx.state.__('Incorrect pseudo or password'));
                }

                _context2.next = 7;
                return ctx.loginUser(user.dataValues);

              case 7:
                _context2.next = 9;
                return this._addUserInBody(ctx);

              case 9:
                userInBody = _context2.sent;

                this.sendOk(ctx, userInBody, ctx.state.__('You are connected'));

              case 11:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function login(_x2) {
        return _ref2.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: 'logout',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(ctx) {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return ctx.logoutUser();

              case 2:
                this.sendOk(ctx, null, ctx.state.__('Sign Out'));

              case 3:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function logout(_x3) {
        return _ref3.apply(this, arguments);
      }

      return logout;
    }()
  }]);
  return RouteAuths;
}(_Route3.default), (_applyDecoratedDescriptor(_class2.prototype, 'signup', [_dec2], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'signup'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'login', [_dec3], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'login'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'logout', [_dec4], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'logout'), _class2.prototype)), _class2)) || _class);
exports.default = RouteAuths;