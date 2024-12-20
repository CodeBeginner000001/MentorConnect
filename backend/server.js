const connection = require("./db.js");
const express = require("express");
const cors = require("cors");
const { userRouter } = require("./routes/userRoutes.js");
const {connectToCloudinary} = require("./config/cloudinary.js");
const app = express();
const port = 3000;
connectToCloudinary();
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