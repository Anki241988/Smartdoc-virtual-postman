function errorMiddleware(err,req,res,next){
     if (err.code === "USER_ALREADY_EXISTS") {
        return res.status(409).json({
            message: "User already exists"
        })
    }

    if(err.code===11000){
        return res.status(409).json({
            message:"Resource already exists"
        })
    }

if (err.type === "entity.parse.failed") {
    return res.status(400).json({
        message: "Invalid JSON"
    })
}
  

   if (err.code === "INVALID_CREDENTIALS") {
    return res.status(401).json({
        message: "Invalid email or password"
    })
}
if (err.code === "USER_NOT_FOUND") {
    return res.status(401).json({
        message: "Authentication required"
    })
}
if (err.code === "CATEGORY_NOT_FOUND") {
    return res.status(404).json({
        message: "Category not found"
    })
}
    console.error("Unexpected server error",err.name)
        return res.status(500).json({
            message:"Internal server error"
        })
    
}
export default errorMiddleware