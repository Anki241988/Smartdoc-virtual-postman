import express from "express"
import router from "./routes/auth.routes.js"
import errorMiddleware from "./middleware/error.middleware.js"

const app =express()

app.use(express.json())

app.use("/api/auth",router)



app.get('/health',(req,res)=>{

  
    res.status(200).send("SmartDoc API is running")
})


app.use(errorMiddleware)

export default app