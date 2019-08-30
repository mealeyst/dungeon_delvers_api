`use strict`;

import mysql from "mysql";

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_SOURCE
});

connection.connect(function(err) {
  if (err) throw err;
});

module.exports = connection;
