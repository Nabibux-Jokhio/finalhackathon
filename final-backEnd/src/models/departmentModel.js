import mongoose from "mongoose"


const DepartmentSchema = mongoose.Schema({
    name:{
        type : String,
        required: true
    }
})


export const Department = mongoose.model("department", DepartmentSchema)