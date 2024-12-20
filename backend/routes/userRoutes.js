const express = require("express");
const userRouter = express.Router(); // ✅ This is correct
const { userLogin, userRegister, getAllUsers,getUser,getAuthUser, updateUser, deleteUser } = require('../controllers/userController.js');
const upload = require("../middleware/multer.js");
const auth = require("../middleware/auth.js");
userRouter.post('/register',upload.single('image'), userRegister);
userRouter.post('/login',userLogin);
userRouter.get('/getUsers',getAllUsers);
userRouter.get('/getAuthUser',auth,getAuthUser);
userRouter.get('/getUser/:userId',getUser);
userRouter.put('/updateUser',upload.single('image'),auth,updateUser);
userRouter.delete('/deleteUser',auth,deleteUser);
module.exports = {userRouter};