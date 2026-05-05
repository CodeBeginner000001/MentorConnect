const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const pool = new Pool({
  connectionString: process.env.POSTGRESQL_NEON,
  ssl: { rejectUnauthorized: false }
});

module.exports = pool;
