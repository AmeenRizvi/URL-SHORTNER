import User from '../models/user.model.js';
import jsonwebtoken from 'jsonwebtoken';
import { AppError, ConflictError } from "../utils/errorHandler.js";
// import bcrypt from "bcrypt";
import { createUser, findUserByEmail, findUserByEmailByPassword } from '../dao/user.dao.js';
import { signToken } from '../utils/helper.js';

export const registerUser = async (name, email, password) => {
  const user = await findUserByEmail(email); 
  if (user) {
    throw new ConflictError("User already exist", 400);
  }

  // const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await createUser(name, email, password);
  const token = await signToken({id : newUser._id});


  return {token, user};
};

export const loginUser = async (email, password) => {
  console.log(email, password);
  console.log(typeof email)
  const user = await findUserByEmailByPassword(email);
  console.log(user);
  if(!user) throw new Error("Invalid email or password");

  const isPasswordValid = await user.comparePassword(password);
  if(!isPasswordValid) throw new Error("Invalid email or password");
  console.log(user);

  const token = await signToken({id : user._id});
  

  return {token,user};
};

