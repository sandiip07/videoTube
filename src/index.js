import dotenv from "dotenv"

import connectDB from "./db/index.js";

dotenv.config({
    path: "/"
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`server is listening on port : ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("mongodb connection faild !!!", err);
    })


























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