import {z} from 'zod';


const userRegistrationSchema = z.object({
    name:z.string({required_error:'Name is required'})
    .trim()
    .min(4, {message:'Name must be atleast 4 characters long'})
    .max(20, {message:'Name must be atmost 20 characters long'}),

    email: z.string({ required_error: 'email is required' })
    .trim()
    .email({ message: 'Invalid email address' })
    .min(3, { message: 'email must be at least 3 characters' })
    .max(100, { message: 'email must be at most 100 characters' }),

    password: z.string({ required_error: 'password is required' })
    .min(8, { message: 'password must be at least 8 characters' })
    .max(100, { message: 'password must be at most 100 characters' }),

    type: z.string({ required_error: 'type is required' })
})

export {userRegistrationSchema}