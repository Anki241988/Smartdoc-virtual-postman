import mongoose from "mongoose"

const MONGODB_URI=process.env.MONGODB_URI

async function connectDB (){

    try {
        await mongoose.connect(MONGODB_URI)

        console.log("mongo db connected successfully")


    } catch (error) {
       console.error("MongoDB connection failed")

       
        throw error
    }
}

export default connectDB