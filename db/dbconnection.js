require('dotenv').config();

const mysql2 = require("mysql2");
const connection = mysql2.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB,
  charset: process.env.MYSQL_CHARSET
});

module.exports = connection;