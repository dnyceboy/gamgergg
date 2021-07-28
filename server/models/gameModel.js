const { Pool } = require('pg');
const dotenv = require('dotenv').config();

const postgreSQL = process.env.PG_URL;

const pool = new Pool({
  connectionString: postgreSQL
});

module.exports = {
  query: (text, params, callback) => {
    console.log('completed query', text);
    return pool.query(text, params, callback);
  }
}