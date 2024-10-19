const express = require('express')
const {getAllUsers,getUserById,usersignup,userlogin,userupdatePassword,userupdateProfile,deleteUser } = require('../controller/User-controller')


const userRouter = express.Router()


userRouter.get("/getallusers", getAllUsers)
userRouter.post("/usersignup", usersignup)
userRouter.post("/userlogin", userlogin)
userRouter.put("/userforgetPassword",userupdatePassword)
userRouter.put("/getuserbyid",getUserById)
userRouter.put("/deleteuser",deleteUser)


module.exports = userRouter;
 