'use strict';

var _ModelManager = require('./ModelManager');

var _ModelManager2 = _interopRequireDefault(_ModelManager);

var _ModelsMigrations = require('./ModelsMigrations');

var _ModelsMigrations2 = _interopRequireDefault(_ModelsMigrations);

var _tranformTable = require('./tranformTable');

var _tranformTable2 = _interopRequireDefault(_tranformTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  ModelManager: _ModelManager2.default,
  ModelsMigrations: _ModelsMigrations2.default,
  tranformTable: _tranformTable2.default
};