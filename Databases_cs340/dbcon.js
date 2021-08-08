// Create a 'connection pool' using the provided credentials
var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : '*',
  user            : '*',
  password        : '*',
  database        : '*'
  // DEBUG: true
});

module.exports.pool = pool;
