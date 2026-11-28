import mongoose from "mongoose"

function validateObjectId(paramName) {
    return (req, res, next) => {
        const id = req.params[paramName]

        if (!mongoose.isObjectIdOrHexString(id)) {
            return res.status(400).json({
                message: `Invalid ${paramName}`
            })
        }

        next()
    }
}

export default validateObjectId