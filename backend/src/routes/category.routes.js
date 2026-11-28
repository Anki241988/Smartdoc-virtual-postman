import express from "express"

import {
    create,
    getAll,
    update,
    remove
} from "../controllers/category.controller.js"

import authMiddleware from "../middleware/auth.middleware.js"
import validateMiddleware from "../middleware/validate.middleware.js"
import { categorySchema } from "../validators/category.validator.js"
import validateObjectId from "../middleware/validateObjectId.middleware.js"

const router = express.Router()

router.use(authMiddleware)

router.post("/", validateMiddleware(categorySchema), create)

router.get("/", getAll)

router.put("/:categoryId", validateObjectId("categoryId"), validateMiddleware(categorySchema), update)

router.delete("/:categoryId", validateObjectId("categoryId"), remove)

export default router