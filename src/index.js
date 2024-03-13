import dotenv from "dotenv"

import connectDB from "./db/dbIndex.js";

dotenv.config({
    path:"/"
})


connectDB()


























// import express from "express"

// const app = express()

//     (async () => {
//         try {
//             await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//             app.on("error", (error) => {
//                 console.log("error in connecting");
//                 throw error
//             })

//             app.listen(process.env.PORT, ()=>{
//                 console.log("successfully connnected");
//             })

//         } catch (error) {
//             console.log("error is found", error);
//             throw error;
//         }
//     })()