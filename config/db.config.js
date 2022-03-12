const { createPool } = require("mysql");
/** Connection pool creation - START */
const db = createPool({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "prakharnagore@123",
  database: "heroku_12f1937794459fe",
  connectionLimit: 10,
});

/** Connect ion pool creation - END */

module.exports = db;
