import express from 'express';
import { connection } from './src/database/connection/dbConnect';
import {config} from 'dotenv';
import cookieParser from "cookie-parser"
import {errorMiddleware} from "./src/middleware/ErrorHandler"
import authRouter from "./src/routes/authRoutes"
config({path: './public/config.env'})

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cookieParser());


// routes
app.use("/api/v1",authRouter);


// handling the error
app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
    console.log(`server is running on port http://localhost:${process.env.PORT}`)
    connection();
})