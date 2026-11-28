
import jwt from "jsonwebtoken"
import mongoose from "mongoose"

const JWT_SECRET = process.env.JWT_SECRET

function authMiddleware(req, res, next) {

    const token = req.cookies.accessToken

    if (!token) {
        return res.status(401).json({
            message: "Authentication required"
        })
    }
     let decoded

    try {
        decoded = jwt.verify(token, JWT_SECRET, {
            algorithms: ["HS256"],
            issuer: "smartdoc-api",
            audience: "smartdoc-web"
        })
    } catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({
                message: "Invalid or expired access token"
            })
        }

        return next(error)
    }
    if (
    !decoded ||
    typeof decoded !== "object" ||
    typeof decoded.sub !== "string" ||
    !mongoose.isObjectIdOrHexString(decoded.sub) ||
    typeof decoded.exp !== "number"
) {
    return res.status(401).json({
        message: "Invalid access token"
    })
}
req.user = {
    id: decoded.sub
}
next()
}
    export default authMiddleware
