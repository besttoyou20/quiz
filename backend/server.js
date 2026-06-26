import express from 'express';
import cors from 'cors';
import { PORT, NODE_ENV } from './config/env.js';
import connectDB from './database/mongodb.js';
import userRouter from './routes/user.routes.js';
import quizRouter from './routes/quiz.routes.js';
import levelRouter from './routes/level.routes.js';
import questionRouter from './routes/question.routes.js';
const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ROUTES
app.use('/api/auth', userRouter);
app.use('/api/quiz', quizRouter);
app.use('/api/levels', levelRouter);
app.use('/api/question', questionRouter);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
//START SERVER
const startServer = async () => {
    try{
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server is running on port http://localhost:${PORT} in ${NODE_ENV} enviroment`);
        })

    }catch(error){
        console.error('Failed to start server', error);
        process.exit(1);
    }
}
startServer();

export default app;