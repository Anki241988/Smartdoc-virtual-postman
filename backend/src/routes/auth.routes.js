import express from "express"
import {register} from "../controllers/auth.controller.js"
import { registerSchema } from "../validators/auth.validator.js"
import { login } from "../controllers/auth.controller.js"
import { loginSchema } from "../validators/auth.validator.js"
import validateMiddleware from "../middleware/validate.middleware.js"
import authMiddleware from "../middleware/auth.middleware.js"
import { me } from "../controllers/auth.controller.js"
import { logout } from "../controllers/auth.controller.js"

const router = express.Router()



router.post("/register", validateMiddleware(registerSchema), register)

router.post("/login", validateMiddleware(loginSchema), login)

router.get("/me", authMiddleware, me)

router.post("/logout", logout)

export default router