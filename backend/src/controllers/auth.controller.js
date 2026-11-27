 import { registerUser } from "../services/auth.service.js"
 import { loginUser } from "../services/auth.service.js"
 
 async function register(req,res){

     const{name,email,password}=req.body

     const user=await registerUser(name,email,password)

     //res.status(200).send('registration endpoint reached')

     res.status(201).json({message:'User registered successfully',

                            user:user
                        }


     )

}

async function login(req,res){

    const{email,password}=req.body

    const result =await loginUser(email,password)

    const { accessToken, user } = result

    res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 15 * 60 * 1000,
    path: "/"
})

res.status(200).json({
    message: "Login successful",
    user: user
})

}

export {register}
export {login}