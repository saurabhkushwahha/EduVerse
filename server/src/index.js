
import app from './app.js';
import dotenv from 'dotenv';
import {customError} from './utils/customErrorHandler.js';
dotenv.config();
app.all('*',(req,res,next) => {
    return next(new customError(400, `cant find ${req.originalUrl} on the server`));
});

// we can also add global error handler here if we needed in my webapp
(async ()=>{
        try{
            //connect the database here when the postgress url will be generted samjhe ashutosh
            
            app.listen(process.env.PORT,()=>{
                console.log(`Server is running on port ${process.env.PORT}`)
            })

        }catch(err){
            console.log("something went wrong while listening on port");
        }
})();