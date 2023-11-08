import express from 'express'
import mongoose from 'mongoose'
import groupRoutes from './routes/group.js'
import dotenv from "dotenv"
dotenv.config()
const app=express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/groups",groupRoutes)

const PORT = process.env.PORT || 5001
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
    .then(() => {
        app.listen(PORT, () => console.log(`server running on ${PORT}`))
    })
    .catch((error) => console.log(error.message))