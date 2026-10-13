// import express from "express";
// import cors from "cors"
// import dotenv from "dotenv";

// dotenv.config();




// const app = express();
// app.use(cors({
//     origin:[],
//     method:["GET", "POST", "PUT" , "DELETE"],
//     credentials:true
// }

// ));
// app.use(express.json());
// app.use("/api/auth",authRouter)


// //import x from "./date.js"
// //import y from "./date.js"
// //import z from "./date.js"
// //console.log(x ,y ,z);
// //import stud_info from "./date.js"
// //console.log(stud_info)

// // import getDate from "./date.js";
// // getDate();

// import { add, subtract, multiply, divide, getDateTime } from "./date.js";

// console.log("Add:", add(100, 5));

// console.log("Sub:", subtract(101, 5));

// console.log("Multiply:", multiply(22, 5));

// console.log("Division:", divide(10, 5));

// console.log("Current Date & Time:", getDateTime());

// console.log("CLAB_11");

// console.log("tayyab is ")


// app.listen(9000,()=>{
//     console.log("server is running on port 9000");
// })



import express from 'express';
import cors  from 'cors';
import dotenv from 'dotenv';

// Load env vars FIRST before any other imports that may use them
dotenv.config();

import connectdb from './config/db.js';
import http, { createServer } from "http";
import url from 'url';
import getTime from  "./date.js";
import authRoute from "./routes/authRoutes.js";

getTime();




const app = express();

app.use(cors({
    origin: [],
    method : ["GET", "POST", "PUT","DELETE"],
    credentials :true
}
));
app.use(express.json());

app.use("/api/auth" , authRoute);

// Basic routes on the Express app
app.get('/', (req, res) => res.send('Welcome to the Home Page!'));


const server = http.createServer(app); 

var adr = 'http://localhost:8080/default.htm?year=2017&month=february'; 
var q = url.parse(adr, true); 
console.log(q.host); //returns 'localhost:8080' 
console.log(q.pathname); //returns '/default.htm' 
console.log(q.search); //returns '?year=2017&month=february' 
var qdata = q.query; //returns an object: { year: 2017, month: 'february' } 
console.log(qdata.month); //returns 'february' 



connectdb();

console.log("CLAB_11");
console.log("abc");
server.listen(5001, ()=>{
    console.log("server is running on port 5001");
})