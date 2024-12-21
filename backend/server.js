const connection = require("./db.js");
const express = require("express");
const cors = require("cors");
const { userRouter } = require("./routes/userRoutes.js");
const {connectToCloudinary} = require("./config/cloudinary.js");
const app = express();
const port = 3000;
const userData = require("./schema/userData.js");
connectToCloudinary();
const mysql = require('mysql2/promise');// For promise-based MySQL operations
app.use(express.json()); 
app.use(cors());
app.listen(port,()=>{
    console.log("app is listening to port ",port);
})
app.use("/api/user",userRouter);

app.get('/create-table', async (req, res) => {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS User (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        bio VARCHAR(1000) NOT NULL,
        image VARCHAR(600),
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        skills JSON,
        interests JSON,
        role VARCHAR(50) NOT NULL
      );
    `;
  
    try {
      // Use await with the promise-based connection
      const [results] = await connection.execute(createTableQuery);
      console.log('Table created:', results);
      res.send('Users table created successfully!');
    } catch (err) {
      console.error('Error creating table:', err);
      res.status(500).send('Failed to create table');
    }
  });
  app.post('/add-users', async (req, res) => {
    const userData = req.body; // Assume userData is passed in the request body as an array of objects
  
    // Query for inserting multiple rows
    const insertQuery = `
      INSERT INTO User (name, bio, image, email, password, skills, interests, role)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
  
    try {
     
  
      // Start a transaction to ensure atomicity
      // const transactionConnection = await connection.getConnection();
      // await transactionConnection.beginTransaction();
  
      // Loop through userData and execute the insert query for each user
      for (const user of userData) {
        const {
          name,
          bio,
          image = null, // Optional fields can default to null
          email,
          password,
          skills,
          interests,
          role,
        } = user;
  
        // Insert each user into the database
        await transactionConnection.execute(insertQuery, [
          name,
          bio,
          image,
          email,
          password,
          JSON.stringify(skills), // Serialize JSON fields
          JSON.stringify(interests),
          role,
        ]);
      }
  
      // Commit the transaction after all inserts succeed
      await transactionConnection.commit();
      console.log('All users added successfully!');
      res.status(201).send('All users added successfully!');
    } catch (err) {
      console.error('Error adding users:', err.message);
      res.status(500).send('Failed to add users. See server logs for details.');
    }
  });
  