import User from "../models/user.model.js"

import argon2 from "argon2"

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

export {registerUser}