import mongoose, { Schema } from "mongoose"
import { Department } from "./departmentModel.js"


const UserSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    nic: {
        type: Number,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true,
        unique: true
    },
    department: {
        type : Schema.Types.ObjectId,
        ref: "Department"
    }

})


export const User = mongoose.model("user", UserSchema)