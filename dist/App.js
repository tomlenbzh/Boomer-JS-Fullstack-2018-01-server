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

var _path = require('path');

var _koaSmart = require('koa-smart');

var _middlewares = require('koa-smart/middlewares');

var _models = require('./models');

var _models2 = _interopRequireDefault(_models);

var _authentification = require('./middlewares/authentification');

var _authentification2 = _interopRequireDefault(_authentification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Set Default Option
_middlewares.RateLimit.defaultOptions({
  // in production you should use RateLimitStores.Sequelize or create your own
  // see https://github.com/ysocorp/koa2-ratelimit for more information
  store: new _middlewares.RateLimitStores.Memory() // By default it will create MemoryStore
});

// the starting class must extend appBase, provided by koa-smart

var App = function (_AppBase) {
  (0, _inherits3.default)(App, _AppBase);

  function App() {
    (0, _classCallCheck3.default)(this, App);
    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, {
      port: 3000,
      // routeParam is an object and it will be give as parametter to all routes
      // so for example you can give models to all your route so you can access on route
      routeParam: {},
      generateDoc: true, // indicates we want generate documentation automatically
      docPath: (0, _path.join)(__dirname, '..', 'apidoc')
    }));
  }

  (0, _createClass3.default)(App, [{
    key: 'start',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var models;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // TODO pass all models to all routes.
                // Eg:
                //    const models = await getModels()
                //    this.routeParam.models = models

                // we add the relevant middlewares to our API
                (0, _get3.default)(App.prototype.__proto__ || (0, _getPrototypeOf2.default)(App.prototype), 'addMiddlewares', this).call(this, [(0, _middlewares.cors)({
                  //origin: '*',
                  // allowHeaders: 'Content-Type',
                  credentials: true
                }), // add cors headers to the requests
                (0, _middlewares.helmet)(), // adds various security headers to our API's responses
                (0, _middlewares.bodyParser)(), // automatically parses the body of POST/PUT/PATCH requests, and adds it to the koa context
                (0, _middlewares.i18n)(this.koaApp, {
                  directory: (0, _path.join)(__dirname, 'locales'),
                  locales: ['en', 'fr'],
                  modes: ['query', 'subdomain', 'cookie', 'header', 'tld'],
                  extension: '.json'
                }), // allows us to easily localize the API
                (0, _middlewares.handleError)(), // helps handling error codes
                (0, _middlewares.logger)(), // gives detailed logs of each request made on the API
                (0, _middlewares.addDefaultBody)(), // if no body is present, put an empty object "{}" in its place.
                _authentification2.default, (0, _middlewares.compress)({}), // compresses requests made to the API
                _middlewares.RateLimit.middleware({ interval: { min: 1 }, max: 100 })] // this will limited every user to call a maximum of 100 request per minute
                );

                models = _models2.default.initModels();

                this.koaApp.context.models = models;
                this.routeParam = { models: models };

                (0, _get3.default)(App.prototype.__proto__ || (0, _getPrototypeOf2.default)(App.prototype), 'mountFolder', this).call(this, (0, _path.join)(__dirname, 'routes'), '/'); // adds a folder to scan for route files
                return _context.abrupt('return', (0, _get3.default)(App.prototype.__proto__ || (0, _getPrototypeOf2.default)(App.prototype), 'start', this).call(this));

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function start() {
        return _ref.apply(this, arguments);
      }

      return start;
    }()
  }]);
  return App;
}(_koaSmart.App);

exports.default = App;