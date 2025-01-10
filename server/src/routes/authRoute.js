import { Router } from "express";
import { registerUser } from "../controller/user.controller.js";
import {validator} from '../middleware/validator.middleware.js';
import { userRegistrationSchema } from "../validator/auth.validaror.js";
const router=Router();

router.route('/register').post(validator(userRegistrationSchema),registerUser);


export {router as authRoute}