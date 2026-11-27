import z from "zod"

const registerSchema = z.object({

 name: z.string().trim().min(2).max(100),
    email: z.email(),
    password: z.string().min(15).max(100)


})

const loginSchema = z.object({

       email: z.email(),
    password: z.string().min(1).max(100)
})

export {registerSchema}
export {loginSchema}