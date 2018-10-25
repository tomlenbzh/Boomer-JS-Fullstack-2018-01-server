module.exports = {
  api: 'http://localhost:3001',
  front: 'http://localhost:4200',
  nbChildProcess: 2,
  isDev: true,
  database: {
    username: "root",
    password: "root",
    database: "JsFullStack_dev",
    host: "127.0.0.1",
    dialect: "mysql",
    logging: true,
    dialectOptions: {
      ssl: false,
    },
  },
  jsonwebtoken: {
    privateKey: 'MY-PRIVATE-KEY-USE-FOR-JWT-TO-CREATE-TOKEN-CONTAIN-USER-INFORMATIONS',
  },
  email: {
    startSubject: '[My app DEV] ',
    htmlLog: true,
  },
};
