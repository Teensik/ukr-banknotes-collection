const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'web_test',
  password: 'igor90vlad06',
  port: 5432,
});

module.exports = pool;