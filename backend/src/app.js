import express from "express"
import router from "./routes/auth.routes.js"
import errorMiddleware from "./middleware/error.middleware.js"
import cookieParser from "cookie-parser"
import categoryRouter from "./routes/category.routes.js"
const app =express()

app.use(express.json())

app.use(cookieParser())

app.use("/api/auth",router)

app.use("/api/categories", categoryRouter)

app.get('/health',(req,res)=>{

  
    res.status(200).send("SmartDoc API is running")
})


app.use(errorMiddleware)

export default app