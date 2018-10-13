/* eslint-disable import/no-extraneous-dependencies */

import { join as pathJoin } from 'path';
import { readdirSync } from 'fs';
import config from 'config';
import Sequelize from 'sequelize';

import tranformTable from './tranformTable';
import ModelsMigrations from './ModelsMigrations';

export default class ModelManager {
  constructor() {
    this.configBDD = config.database;
    this.sequelize = new Sequelize(config.database.database, config.database.username, config.database.password, {    
      host: config.database.host,
      dialect: config.database.dialect,
      operatorsAliases: false,
    
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
    });
    global.sequelize = this.sequelize;
    this.modelsMigrations = new ModelsMigrations(this.sequelize);
    this.models = null;
    this.path = __dirname;
    
    // global.__ is here to let gettext parse the string to put them on .po file
    global.__ = string => string;
  }

  initModels() {
    if (this.models) {
      return this.models;
    }
    const models = {};
    readdirSync(this.path)
      .filter(file => file.startsWith('Table'))
      .forEach((file) => {
        const model = require(pathJoin(this.path, file)).default;
        models[model.name] = model;
      });

    for (const modelName in models) {
      if (models[modelName].associate) {
        models[modelName].models = models;
        models[modelName].associate(models);
      }
      tranformTable(models[modelName]);
    }
    this.models = models;
    return this.models;
  }

  async migrations() {
    return this.modelsMigrations.runMigartions();
  }

  async seeders() {
    const models = this.initModels();
    const folder = `seeders/${process.env.NODE_ENV || process.env.ENV || 'development'}`;
    return this.modelsMigrations.runSeeders({ models, folder }).catch((err) => {
      console.log('[ERROR][SEEDERS] folder:', folder, 'does not exist', err);
    });
  }
}
