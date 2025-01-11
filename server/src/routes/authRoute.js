import { Router } from "express";
import { registerUser,loginUser } from "../controller/user.controller.js";
import {validator} from '../middleware/validator.middleware.js';
import { userRegistrationSchema,userLoginSchema } from "../validator/auth.validaror.js";
const router=Router();

router.route('/register').post(validator(userRegistrationSchema),registerUser);
router.route('/login').post(validator(userLoginSchema),loginUser);


export {router as authRoute}