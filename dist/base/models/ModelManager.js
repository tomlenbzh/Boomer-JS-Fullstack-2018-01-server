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

var _fs = require('fs');

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _tranformTable = require('./tranformTable');

var _tranformTable2 = _interopRequireDefault(_tranformTable);

var _ModelsMigrations = require('./ModelsMigrations');

var _ModelsMigrations2 = _interopRequireDefault(_ModelsMigrations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-extraneous-dependencies */

var ModelManager = function () {
  function ModelManager() {
    (0, _classCallCheck3.default)(this, ModelManager);

    this.configBDD = _config2.default.database;
    this.sequelize = new _sequelize2.default(_config2.default.database.database, _config2.default.database.username, _config2.default.database.password, {
      host: _config2.default.database.host,
      dialect: _config2.default.database.dialect,
      operatorsAliases: false,

      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    });
    global.sequelize = this.sequelize;
    this.modelsMigrations = new _ModelsMigrations2.default(this.sequelize);
    this.models = null;
    this.path = __dirname;

    // global.__ is here to let gettext parse the string to put them on .po file
    global.__ = function (string) {
      return string;
    };
  }

  (0, _createClass3.default)(ModelManager, [{
    key: 'initModels',
    value: function initModels() {
      var _this = this;

      if (this.models) {
        return this.models;
      }
      var models = {};
      (0, _fs.readdirSync)(this.path).filter(function (file) {
        return file.startsWith('Table');
      }).forEach(function (file) {
        var model = require((0, _path.join)(_this.path, file)).default;
        models[model.name] = model;
      });

      for (var modelName in models) {
        if (models[modelName].associate) {
          models[modelName].models = models;
          models[modelName].associate(models);
        }
        (0, _tranformTable2.default)(models[modelName]);
      }
      this.models = models;
      return this.models;
    }
  }, {
    key: 'migrations',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', this.modelsMigrations.runMigartions());

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function migrations() {
        return _ref.apply(this, arguments);
      }

      return migrations;
    }()
  }, {
    key: 'seeders',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var models, folder;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                models = this.initModels();
                folder = 'seeders/' + (process.env.NODE_ENV || process.env.ENV || 'development');
                return _context2.abrupt('return', this.modelsMigrations.runSeeders({ models: models, folder: folder }).catch(function (err) {
                  console.log('[ERROR][SEEDERS] folder:', folder, 'does not exist', err);
                }));

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function seeders() {
        return _ref2.apply(this, arguments);
      }

      return seeders;
    }()
  }]);
  return ModelManager;
}();

exports.default = ModelManager;