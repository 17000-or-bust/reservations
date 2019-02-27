const mysqlDB = require('../../database/mysqlConnect.js');
// const pgDB = require('');
// const mongoDB = require('');
const DB_OPTIONS = {
  0: 'mysql',
  1: 'pg',
  2: 'mongo',
};
const DB_FLAG = 1;

const getControllerFromFlag = flag => {
  return controllers[DB_OPTIONS[flag]];
};

const controllers = {
  mysql: {
    getRecordsForId: (table, id) => {
      const query = `SELECT * FROM ${table} WHERE id = ?`;
      const params = [id];
    },
  },
  pg: {
    getRecordsForId: (table, id) => {

    },
  },
  mongo: {
    getRecordsForId: (table, id) => {

    },
  },
};

module.exports = getControllerFromFlag(DB_FLAG);
