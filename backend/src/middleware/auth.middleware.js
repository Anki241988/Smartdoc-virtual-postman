
import jwt from Jsonwebtoken

const JWT_SECRET = process.env.JWT_SECRET

function authMiddleware(req, res, next) {

    const token = req.cookies.accessToken

    if (!token) {
        return res.status(401).json({
            message: "Authentication required"
        })
    }
}