import express from "express"
import {loginControl, logoutControl, registerControl} from "../conrollers/authControllers.js"
import upload from "../cloudinary/cloudinary.js"
const authRoutes = express.Router()

authRoutes.post("/register",upload.single('avatar'), registerControl)
authRoutes.post("/login", loginControl)
authRoutes.post("/logout", logoutControl)

export default authRoutes