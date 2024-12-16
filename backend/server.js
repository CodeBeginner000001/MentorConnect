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