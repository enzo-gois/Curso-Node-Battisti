const mysql = require('mysql2');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'EnzoMysql3091',
  database: 'nodemysql',
});

module.exports = pool;
