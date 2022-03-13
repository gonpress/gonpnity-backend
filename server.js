import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import boardRouter from "./router/boardRouter.js";
import userRouter from "./router/userRouter.js";
import connectDB from './config/db.js';
import cors from 'cors';

dotenv.config();
connectDB();

const PORT = process.env.PORT || 8001;
const app = express();


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use('/board', boardRouter);
app.use('/', userRouter);

app.get('/', (req, res) => {
    res.json('api running');
})

app.listen(PORT, console.log('started server', PORT));