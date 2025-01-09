import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {authRoute} from './routes/authRoute.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(express.static('public'));


app.use('/api/auth',authRoute);


app.get('/',(req, res) => {
    res.send('Hello server is running!');
})

export default app;
