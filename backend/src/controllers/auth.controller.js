 import { registerUser } from "../services/auth.service.js"
 import { loginUser } from "../services/auth.service.js"
 import { getCurrentUser } from "../services/auth.service.js"
 
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

async function me(req, res) {

    const userId = req.user.id

    const user = await getCurrentUser(userId)

    res.status(200).json({
        user
    })
}

function logout(req, res) {
    res.clearCookie("accessToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/"
    })

    res.status(200).json({
        message: "Logout successful"
    })
}

export {register}
export {login}
export { me }
export { logout }