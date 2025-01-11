import {asyncHandler} from '../utils/asyncHandler.js';

import bcrypt from 'bcrypt';
import { customError } from '../utils/customErrorHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { isPasswordCorrect } from '../middleware/auth.middleware.js';
import { generateAccesssAndrefereshToken ,refreshTokenOptions,accessTokenOptions} from '../middleware/auth.middleware.js';

import prisma from '../utils/prisma.js';
const registerUser=asyncHandler(async(req,res,next)=>{
    const {name,email,password,type}=req.body;
    const exitsUser=await prisma.user.findUnique({
        where:{
            email:email
        }
    });
    if(exitsUser){
        return next(new customError(400,'User already exits'));
    }
    const salt=await bcrypt.genSalt(10);
    const hashPassword=await bcrypt.hash(password,salt);
    const user=await prisma.user.create({
        data:{
            name,
            email,
            password:hashPassword,
            type
        }
    });
    return res.status(201).json(new ApiResponse(201,{userid:user.id},'User created successfully'));
    
})

const loginUser=asyncHandler(async(req,res,next)=>{
    const {email,password}=req.body;
    const user=await prisma.user.findUnique({
        where:{
            email:email
        }
    });
    if(!user){
        return next(new customError(400,'Invalid credentials'));
    }
    const isPasswordValid=await isPasswordCorrect(password,user.password);
    if(!isPasswordValid){
        return next(new customError(400,'Invalid credentials'));
    }
    
    const {accesstoken,refreshtoken}=await generateAccesssAndrefereshToken(user.id);
    return res
    .cookie('refreshtoken',refreshtoken,refreshTokenOptions)
    .cookie('accesstoken',accesstoken,accessTokenOptions)
    .json(new ApiResponse(200,{user,accesstoken,refreshtoken},'User logged in successfully'));





})



export {registerUser,loginUser}