import { z } from "zod"
import mongoose from "mongoose"

const documentSchema = z.object({
    title: z.string().trim().min(1).max(200),

    categoryId: z.string().refine(
        (id) => mongoose.isObjectIdOrHexString(id),
        {
            message: "Invalid category ID"
        }
    ),

    personName: z.string().trim().min(1).max(100),

    year: z.number().int().min(1900).max(2100)
})

export { documentSchema }