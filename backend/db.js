const mysql = require('mysql2/promise');  // Import mysql2 with promises
const dotenv = require('dotenv');
dotenv.config();

// Create a connection pool
const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,  // Ensures that queries wait for a connection to be available
    connectionLimit: 10,  // Set the maximum number of connections in the pool
    queueLimit: 0,  // Unlimited queue length
});

// No need to call .connect() as the pool is already set up

module.exports = connection;  // Export the connection pool