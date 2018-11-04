"use strict";

module.exports = {
  isDev: false,
  database: {
    username: "root",
    password: "Xp80QiZM47",
    database: "JsFullStack_production",
    host: "127.0.0.1",
    dialect: "mysql",
    logging: true,
    dialectOptions: {
      ssl: true
    }
  },
  jsonwebtoken: {
    privateKey: 'MY-PRIVATE-KEY-USE-FOR-JWT-TO-CREATE-TOKEN-CONTAIN-USER-INFORMATIONS'
  }
};