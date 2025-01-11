import prisma from '../utils/prisma.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import { customError } from '../utils/customErrorHandler.js';
const isPasswordCorrect=async (password,hashPassword)=>{
    return await bcrypt.compare(password,hashPassword);
}
dotenv.config();

const generateAccesssAndrefereshToken=async(userid)=>{
    try{
        const accesstoken=jwt.sign({userid},process.env.SECRET_KEY,{expiresIn:'15m'});
        const refreshtoken=jwt.sign({userid},process.env.SECRET_KEY,{expiresIn:'7d'});
        await prisma.user.update({
            where:{
                id:userid
            },
            data:{
                refreshToken:refreshtoken
            }
        })
        return { accesstoken, refreshtoken };


    }catch(err){
        console.log(err);
        throw new customError(500,'Internal server error in generating acess and refresh token');
    }
}
 const accessTokenOptions = {
    httpOnly: true,
    sameSite: 'none',
    secure: true,
    maxAge: 86400000,
};

const refreshTokenOptions = {
    httpOnly: true,
    sameSite: 'none',
    secure: true,
    maxAge: 864000000,
};

export {isPasswordCorrect,generateAccesssAndrefereshToken,accessTokenOptions,refreshTokenOptions}