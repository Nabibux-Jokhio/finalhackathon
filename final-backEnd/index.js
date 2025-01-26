import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose";
import router from "./src/routes/index.js";




const app = express();
dotenv.config()
const DB_NAME = "Beneficiary_Management_App"
const PORT = process.env.PORT || 8080
const MONGODB_URI = process.env.MONGODB_URI

app.use(express.json())
app.use(cors())
app.use("/", router)

mongoose.connect(`${MONGODB_URI}/${DB_NAME}`)
.then(()=>{
    console.log("DB CONNECT  SUCCESSFULLY");  
})
.catch((error)=>{
    console.log("DB NOT CONNECT",error);
})

app.listen(PORT, () => {
    console.log("server started", PORT);
})


