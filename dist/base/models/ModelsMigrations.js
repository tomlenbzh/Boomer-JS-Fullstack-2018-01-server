'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _path = require('path');

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _umzug = require('umzug');

var _umzug2 = _interopRequireDefault(_umzug);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModelsMigrations = function () {
  function ModelsMigrations(sequelize) {
    (0, _classCallCheck3.default)(this, ModelsMigrations);

    this.client = sequelize;
  }

  (0, _createClass3.default)(ModelsMigrations, [{
    key: '_addMethod',
    value: function _addMethod(client) {
      var _this = this;

      var queryInterface = client.getQueryInterface();

      queryInterface.bulkInsertAutoIncrement = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(tableName, data) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var query;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return queryInterface.bulkInsert(tableName, data, options);

                case 2:
                  query = 'select setval(\'' + tableName + '_id_seq\', (select max(id) from ' + tableName + '))';
                  _context.next = 5;
                  return queryInterface.sequelize.query(query);

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }();
    }
  }, {
    key: '_getUmzug',
    value: function _getUmzug(_ref2) {
      var _ref2$tableName = _ref2.tableName,
          tableName = _ref2$tableName === undefined ? 'migrations' : _ref2$tableName,
          _ref2$folder = _ref2.folder,
          folder = _ref2$folder === undefined ? 'migrations' : _ref2$folder,
          models = _ref2.models;

      this._addMethod(this.client);

      return new _umzug2.default({
        storage: 'sequelize',
        storageOptions: {
          sequelize: this.client,
          tableName: tableName
        },
        logging: console.log,
        migrations: {
          params: [this.client.getQueryInterface(), _sequelize2.default, models],
          path: (0, _path.join)(process.cwd(), 'src', 'db', folder),
          pattern: /^\d+[\w-]+\.js$/,
          wrap: function wrap(fun) {
            if (fun.length === 4) {
              return _bluebird2.default.promisify(fun);
            }
            return fun;
          }
        }
      });
    }
  }, {
    key: 'runMigartions',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var migrator;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                migrator = this._getUmzug({});
                return _context2.abrupt('return', this.client.authenticate().then(function () {
                  return migrator.up();
                }));

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function runMigartions() {
        return _ref3.apply(this, arguments);
      }

      return runMigartions;
    }()
  }, {
    key: 'runSeeders',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(_ref5) {
        var models = _ref5.models,
            _ref5$folder = _ref5.folder,
            folder = _ref5$folder === undefined ? 'seeders' : _ref5$folder;
        var migrator;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log(models);
                migrator = this._getUmzug({ models: models, folder: folder });
                return _context3.abrupt('return', this.client.authenticate().then(function () {
                  return migrator.up();
                }));

              case 3:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function runSeeders(_x4) {
        return _ref4.apply(this, arguments);
      }

      return runSeeders;
    }()
  }]);
  return ModelsMigrations;
}();

exports.default = ModelsMigrations;