
import { User } from "../models/userModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()
const registerControl = async (req, res) => {
    const { userName, email, password } = req.body
    const avatar = req.file.path
    try {
        if (!userName || !email || !password) {
            return res.status(400).send({ status: 400, message: "all feilds are required" })
        }

        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).send({ status: 400, message: "Email already exist" })
        }

        const hashPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create(
            {
                userName,
                password: hashPassword,
                email,
                avatar: avatar || ""
            },
        )

        res.status(201).json({ message: "User created", newUser })

    } catch (error) {
        res.status(404).send({ status: 404, message: "something went wrong" })
    }
}




const loginControl = async (req, res) => {
    const { email, password } = req.body
    try {
        if (!email || !password) {
            return res.status(400).send({ status: 400, message: "all feilds are required" })
        }

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).send({ status: 400, message: "user not found" })
        }

        const ismatch = await bcrypt.compare(password, user?.password)

        if (!ismatch) {
            return res.status(400).send({ status: 400, message: "password not match" })
        }
        const token = jwt.sign({ id: user?._id }, process.env.ACCESS_TOKEN_SECRET)
        res.status(200).json({ message: "login sucessfully", token, user })

    } catch (error) {
        res.status(404).json({ status: 404, message: "something went wrong" })
    }
}


const logoutControl = async (req, res) => {
    res.status(200).send({ message: " logout successfully" })
}


export { registerControl, loginControl, logoutControl }