const express = require("express");
const userRouter = express.Router(); // ✅ This is correct
const { userLogin, userRegister, getAllUsers,getUser, updateUser, deleteUser } = require('../controllers/userController.js');
const upload = require("../middleware/multer.js");
const auth = require("../middleware/auth.js");
userRouter.post('/register',upload.single('image'), userRegister);
userRouter.post('/login',userLogin);
userRouter.get('/getUsers',getAllUsers);
userRouter.get('/getUser',auth,getUser);
userRouter.put('/updateUser',auth,updateUser);
userRouter.delete('/deleteUser',auth,deleteUser);
module.exports = {userRouter};