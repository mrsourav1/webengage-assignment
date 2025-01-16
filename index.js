import express from "express";
import 'dotenv/config'
import { csvRouter } from "./route/csvRoute.js"
const app = express()
const port = process.env.PORT

app.use("/",csvRouter)

app.listen(port,()=>{
    console.log(`i am running on ${port}`)
})
