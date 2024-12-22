const connection = require("./db.js");
const express = require("express");
const cors = require("cors");
const { userRouter } = require("./routes/userRoutes.js");
const {connectToCloudinary} = require("./config/cloudinary.js");
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const port = 3000;
const cloudinary = require("cloudinary").v2;
const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET);
}
const userData = require("./schema/userData.js");
connectToCloudinary();
const mysql = require('mysql2/promise');// For promise-based MySQL operations
app.use(express.json()); 
app.use(cors());
app.listen(port,()=>{
    console.log("app is listening to port ",port);
})
//user api
app.use("/api/user",userRouter);

//for creating a table
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
      res.send('Users table created successfully!');
    } catch (err) {
      res.status(500).send('Failed to create table');
    }
  });
//for adding multiple users
 app.post('/add-users', async (req, res) => {
    // Query for inserting multiple rows
    const insertQuery = `
      INSERT INTO User (name, bio, image, email, password, skills, interests, role)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    try {
  //     // Loop through userData and execute the insert query for each user
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
   let imageUrl = '';
                 if(image != null){
                     const uploadedImage = await cloudinary.uploader.upload(image, { resource_type: 'image' });
                     imageUrl = uploadedImage.secure_url;
                 }      
                 const salt = await bcrypt.genSalt(10);
                 const hashedPassword = await bcrypt.hash(password,salt);
        // Insert each user into the database
        await connection.execute(insertQuery, [
          name,
          bio,
          imageUrl,
          email,
          hashedPassword,
          JSON.stringify(skills), // Serialize JSON fields
          JSON.stringify(interests),
          role,
        ]);
      }
      res.status(201).send('All users added successfully!');
    } catch (err) {
      res.status(500).send('Failed to add users. See server logs for details.');
    }
  });
  