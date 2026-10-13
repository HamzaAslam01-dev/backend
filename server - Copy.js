import express from "express";
import cors from "cors"
import dotenv from "dotenv";

dotenv.config();




const app = express();
app.use(cors());
app.use(express.json());

//import x from "./date.js"
//import y from "./date.js"
//import z from "./date.js"
//console.log(x ,y ,z);
//import stud_info from "./date.js"
//console.log(stud_info)

// import getDate from "./date.js";
// getDate();

import { add, subtract, multiply, divide, getDateTime } from "./date.js";

console.log("Add:", add(100, 5));

console.log("Sub:", subtract(101, 5));

console.log("Multiply:", multiply(22, 5));

console.log("Division:", divide(10, 5));

console.log("Current Date & Time:", getDateTime());

console.log("CLAB_11");

console.log("tayyab is ")


app.listen(9000,()=>{
    console.log("server is running on port 9000");
})