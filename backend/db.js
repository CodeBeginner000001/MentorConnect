const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config();

// Create a connection pool to Google Cloud SQL MySQL instance
const pool = mysql.createPool({
  host: process.env.DB_HOST,          // Public IP or Cloud SQL instance IP
  user: process.env.DB_USER,          // MySQL username
  password: process.env.DB_PASSWORD,  // MySQL password
  database: process.env.DB_NAME,      // Your database name
  port: process.env.DB_PORT || 3306,  // Default MySQL port
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : undefined  // Enable SSL if needed
});

module.exports = pool;
