"use strict";

module.exports = {
  isDev: true,
  database: {
    username: "root",
    password: "Xp80QiZM47",
    database: "JsFullStack_dev",
    host: "127.0.0.1",
    dialect: "mysql",
    logging: true,
    dialectOptions: {
      ssl: false
    }
  },
  jsonwebtoken: {
    privateKey: 'MY-PRIVATE-KEY-USE-FOR-JWT-TO-CREATE-TOKEN-CONTAIN-USER-INFORMATIONS'
  }
};