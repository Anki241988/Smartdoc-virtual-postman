
import User from "../models/user.model.js"

import argon2 from "argon2"

import jwt from "jsonwebtoken"

const JWT_SECRET=process.env.JWT_SECRET

if (!JWT_SECRET || JWT_SECRET.length < 64) {
    throw new Error("JWT_SECRET is missing or invalid")
}



async function registerUser(name,email,password){

    const normalizedEmail=email.trim().toLowerCase()

  const existingUser=await User.findOne({ email:normalizedEmail})


 if (existingUser) {
    const error = new Error("User already exists")
    error.code = "USER_ALREADY_EXISTS"
    throw error
}
 const passwordHash= await argon2.hash(password)

 const newUser=await User.create({
  name:name,
  email:normalizedEmail,
  passwordHash:passwordHash
 })
 return{
  id:newUser.id,
  name : newUser.name,
  email:newUser.email,
  emailVerified:newUser.emailVerified,
 }
}



async function loginUser(email,password){
  const normalizedEmail = email.trim().toLowerCase()

  const user = await User.findOne({
    email: normalizedEmail
  }).select("+passwordHash")

 if (!user || !user.passwordHash) {
    const error = new Error("Invalid email or password")
    error.code = "INVALID_CREDENTIALS"
    throw error
}

const isPasswordValid=await argon2.verify(user.passwordHash,password)

if (!isPasswordValid) {
    const error = new Error("Invalid email or password")
    error.code = "INVALID_CREDENTIALS"
    throw error
}
const accessToken = jwt.sign(
    {
        sub: user.id
    },
    JWT_SECRET,
    {
        algorithm: "HS256",
        expiresIn: "15m",
        issuer: "smartdoc-api",
        audience: "smartdoc-web"
    }
    
)
return{
    accessToken: accessToken,
    user: {
        id: user.id,
        name: user.name,
        email: user.email,
        emailVerified: user.emailVerified
    
}
}
}
export {registerUser}
export{loginUser}