import express from "express"
import router from "./routes/auth.routes.js"
import errorMiddleware from "./middleware/error.middleware.js"
import cookieParser from "cookie-parser"

const app =express()

app.use(express.json())

app.use(cookieParser())

app.use("/api/auth",router)



app.get('/health',(req,res)=>{

  
    res.status(200).send("SmartDoc API is running")
})


app.use(errorMiddleware)

export default app