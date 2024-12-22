const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const validator = require("validator");
const connection = require("../db.js");
const cloudinary = require("cloudinary").v2;

//function for creating the token
const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET);
}
//user register
const userRegister = async (req,res) => {
    try{
             let {name,email,bio,password,skills = null,interests = null ,role} = req.body;
             let image = req.file;     
             if(!name || !email || !password || !role || !bio){
                throw new Error("Invalid Credentials");
             }
             if(!validator.isEmail(email)){
                return res.json({success:false,msg:"Please enter a valid email"});
               }
               if(password.length < 8){
                return res.json({success:false,msg:"Please enter a strong password"});
               }
               await connection.query('USE user');
               const [results] = await connection.query('SELECT * FROM User WHERE email = ?',[email]);
               if(results.length > 0){
                return res.json({success:false,msg:"User already exists"});
               }  
               let imageUrl = '';
               if(image != null){
                   const uploadedImage = await cloudinary.uploader.upload(image.path, { resource_type: 'image' });
                   imageUrl = uploadedImage.secure_url;
               }      
               const salt = await bcrypt.genSalt(10);
               const hashedPassword = await bcrypt.hash(password,salt);
                 await connection.execute('INSERT INTO User (name,email,password,image,skills,interests,role,bio) VALUES (?,?,?,?,?,?,?,?)',[name,email,hashedPassword,imageUrl,skills,interests,role,bio]);
                 const [[user]] = await connection.query('SELECT * FROM User WHERE email = ?',email);
                const token = createToken(user.id);
                res.send({success:true,token});
    }catch(e){
        res.json({success:false,msg:e.message});
    }
}
//user login
const userLogin = async (req,res) => {
    try{
               const {email,password} = req.body;
               if(!email || !password){
                throw new Error("Invalid Credentials");
               }
               const [[user]] = await connection.query('SELECT * FROM User WHERE email = ?',[email]);
               if(user == null){
                throw new Error("User doesn't exist");
               }
               const isMatched = await bcrypt.compare(password,user.password);
               if(!isMatched){
                throw new Error("Invalid Credentials");
               }
               const token = createToken(user.id);
               res.send({success:true,token});
    }catch(e){
                 res.json({success:false,msg:e.message});
    }
} 

//getting all users
const getAllUsers = async (req,res) => {
try{
    const [results] = await connection.query('SELECT * FROM User');
    res.send({success:true,results});
}catch(e){
    res.json({success:false,msg:e.message});
}
}
//getting the user
const getUser = async (req,res) =>{
    try{
          const {userId} = req.params;
          const [result] = await connection.query('SELECT * FROM User WHERE id = ?',[userId]);
    res.send({success:true,result});
    }catch(e){
        res.json({success:false,msg:e.message});
    }
}
//getting the authorized user
const getAuthUser = async (req,res) =>{
    try{
          const {userId} = req.body;
          const [result] = await connection.query('SELECT * FROM User WHERE id = ?',[userId]);
    res.send({success:true,result});
    }catch(e){
        res.json({success:false,msg:e.message});
    }
}
//updating a user
const updateUser = async (req,res)=>{
    try{
         const {name,email,password,skills,interests,role,userId,bio} = req.body;
         const image = req.file;     
         if(!name || !email || !password || !role){
            throw new Error("Invalid Credentials");
         }
         if(!validator.isEmail(email)){
            return res.json({success:false,msg:"Please enter a valid email"});
           }
           if(password.length < 8){
            return res.json({success:false,msg:"Please enter a strong password"});
           }
           let imageUrl = '';
           if(image != null){
               const uploadedImage = await cloudinary.uploader.upload(image.path, { resource_type: 'image' });
               imageUrl = uploadedImage.secure_url;
           }else{
            let img = await connection.query('SELECT image FROM User WHERE id = ?',[userId]);
            imageUrl = img[0][0].image;
           }
               const salt = await bcrypt.genSalt(10);
               const hashedPassword = await bcrypt.hash(password,salt);
              await connection.execute(
            'UPDATE User SET name = ?, email = ?, password = ?, image = ?, skills = ?, interests = ?, role = ?, bio = ? WHERE id = ?',
            [
                name,
                email,
                hashedPassword,
                imageUrl,
                skills,
                interests,
                role,
                bio,
                userId
            ]
        );
        const [[updatedUser]] = await connection.query('SELECT * FROM User WHERE id = ?',[userId]);
         res.send({success:true,updatedUser});
    }catch(e){
        res.json({success:false,msg:e.message});
    }
}
//updating the password
const updatePassword = async (req,res)=>{
    try{
             const {userId,newPassword} = req.body;
             const password = await connection.query('SELECT password FROM User WHERE id = ?',[userId]);
             if(password[0][0].password === newPassword){
                throw new Error("Please enter a new password");
             }
             if(newPassword.length < 8){
                return res.json({success:false,msg:"Please enter a strong password"});
             }
             const salt = await bcrypt.genSalt(10);
             const hashedPassword = await bcrypt.hash(newPassword,salt);
             await connection.query('UPDATE User SET password = ?',[hashedPassword]);
             res.json({success:true,msg:"Your Password is Changed"});
    }catch(e){
        res.json({success:false,msg:e.message});
    }
}
//deleting a user
const deleteUser = async (req,res) => {
    try{
        const {userId} = req.body;
         // Check if the user exists before trying to delete
         const [[user]] = await connection.query('SELECT * FROM User WHERE id = ?', [userId]);
         if (!user) {
             return res.json({ success: false, msg: "User not found" });
         }
         // Delete the user from the database
         const [result] = await connection.execute('DELETE FROM User WHERE id = ?', [userId]);
       res.send({success:true,msg:"User Deleted Successfully"});
    }catch(e){
        res.json({success:false,msg:e.message});
    }
}

module.exports = {userRegister,userLogin,getAllUsers,deleteUser,updateUser,updatePassword,getUser,getAuthUser};