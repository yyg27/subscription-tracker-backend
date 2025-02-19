import express from 'express';
import cookieParser from 'cookie-parser';

import { PORT } from './config/env.js';

import userRouter from './routes/user.routes.js';   
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import connectToDatabase from './database/mongodb.js';
import errorMiddleware from './middlewares/error.middleware.js';
import arcjetMiddleware from './middlewares/arcjet.middleware.js';

const app = express();

app.use(express.json()); // built-in middleware to use json
app.use(express.urlencoded({extended:false})); // 
app.use(cookieParser()); // cookie parser middleware 
app.use(arcjetMiddleware)

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/users',userRouter);
app.use('/api/v1/subscriptions',subscriptionRouter);

app.use(errorMiddleware);

app.get('/',(req,res) => {
    res.send('Hello World');
})

app.listen(PORT, async() => {
    console.log(`Server is running on port ${PORT}`);
    await connectToDatabase(); // we made this async because connectToDatabase is async and uses await
}) 
