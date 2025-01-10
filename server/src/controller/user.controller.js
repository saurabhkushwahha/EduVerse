import {asyncHandler} from '../utils/asyncHandler.js';
import {PrismaClient} from '@prisma/client';
import bcrypt from 'bcrypt';
import { customError } from '../utils/customErrorHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';

const prisma = new PrismaClient();
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



export {registerUser}