'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _utils = require('koa-smart/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configJWT = _config2.default.jsonwebtoken;

function loginUser(ctx) {
  var _this = this;

  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(user) {
      var userToRegister, token;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              userToRegister = {
                id: user.id,
                loginTokenVersion: _config2.default.loginTokenVersion
              };
              token = _utils.jsonwebtoken.sign(userToRegister, configJWT.privateKey, configJWT.options);

              ctx.state.user = userToRegister;
              ctx.body.token = token;
              ctx.body.expires = userToRegister.expires;
              return _context.abrupt('return', { token: token, expires: userToRegister.expires });

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

function logoutUser(ctx) {
  var _this2 = this;

  return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
    var token;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            token = ctx.get('Authorization');

            if (!token) {
              _context2.next = 4;
              break;
            }

            _context2.next = 4;
            return ctx.models.tokens.consumeOne({ token: token });

          case 4:
            ctx.state.user = undefined;

          case 5:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this2);
  }));
}

exports.default = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(ctx, next) {
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            ctx.loginUser = loginUser(ctx);
            ctx.logoutUser = logoutUser(ctx);
            _context3.next = 4;
            return next();

          case 4:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function (_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();