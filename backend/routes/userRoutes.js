const express = require("express");
const userRouter = express.Router();
const { userLogin, userRegister, getAllUsers,getUser,getAuthUser, updateUser, deleteUser, updatePassword } = require('../controllers/userController.js');
const upload = require("../middleware/multer.js");
const auth = require("../middleware/auth.js");
//user routes
userRouter.post('/register',upload.single('image'), userRegister);
userRouter.post('/login',userLogin);
userRouter.get('/getUsers',getAllUsers);
userRouter.get('/getAuthUser',auth,getAuthUser);
userRouter.get('/getUser/:userId',getUser);
userRouter.put('/updateUser',upload.single('image'),auth,updateUser);
userRouter.put('/updatePassword',auth,updatePassword);
userRouter.delete('/deleteUser',auth,deleteUser);
module.exports = {userRouter};