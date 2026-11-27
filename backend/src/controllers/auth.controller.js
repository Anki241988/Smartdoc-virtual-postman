 import { registerUser } from "../services/auth.service.js"
 
 async function register(req,res){

     const{name,email,password}=req.body

     const user=await registerUser(name,email,password)

     //res.status(200).send('registration endpoint reached')

     res.status(201).json({message:'User registered successfully',

                            user:user
                        }


     )

}

export {register}