import { z } from "zod"

const categorySchema = z.object({
    name: z.string().trim().min(1).max(100)
})

export { categorySchema }