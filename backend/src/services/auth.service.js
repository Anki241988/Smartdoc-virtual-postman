import User from "../models/user.model.js"

import argon2 from "argon2"

async function registerUser(name,email,password){

    const normalizedEmail=email.trim().toLowerCase()

  const existingUser=await User.findOne({ email:normalizedEmail})
}