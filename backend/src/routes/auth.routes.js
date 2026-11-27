import express from "express"
import {register} from "../controllers/auth.controller.js"
import { registerSchema } from "../validators/auth.validator.js"
import { login } from "../controllers/auth.controller.js"
import { loginSchema } from "../validators/auth.validator.js"
import validateMiddleware from "../middleware/validate.middleware.js"

const router = express.Router()



router.post("/register", validateMiddleware(registerSchema), register)

router.post("/login", validateMiddleware(loginSchema), login)


export default router