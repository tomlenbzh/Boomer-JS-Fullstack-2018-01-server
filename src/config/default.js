var packageJson = require('../package.json');

const port = process.env.PORT || 3001;

module.exports = {
  appName: 'My App',
  name: packageJson.name,
  version: packageJson.version,
  loginTokenVersion: '1',
  port,
  api: undefined,
  front: undefined,
  jsonwebtoken: {
    privateKey: process.env.JWT_KEY, // MY-PRIVATE-KEY-USE-FOR-JWT-TO-CREATE-TOKEN-CONTAIN-USER-INFORMATIONS
  },
  database: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE,
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT,
    logging: false, // Outputting SQL to the console on execution of query
    dialectOptions: {
      ssl: true,
    },
  },
  // all elem in env will be add to process.env object
  env: {
  },
};
