import app from "./app.js"
import connectDB from "./config/db.js"

const PORT=process.env.PORT



async function startServer(){

    try {

await  connectDB()

 app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`)
})
        
    } catch (error) {
        console.error("SmartDoc server startup failed")
      process.exitCode = 1
    }

}

startServer()