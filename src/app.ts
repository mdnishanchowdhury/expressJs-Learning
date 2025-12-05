import express, { Request, Response } from 'express';
import initDB, { pool } from './config/db';
import logger from './middleware/logger';
import { userRoutes } from './modules/user/user.routes';
import { todoRouter } from './modules/todo/todo.router';
import { authRoutes } from './modules/auth/auth.routes';


const app = express()


// parser json data anta use kora hoi
app.use(express.json());
// from data jnno
// app.use(express.urlencoded())
app.use(express.urlencoded({ extended: true }));


initDB();

app.get('/', logger, (req: Request, res: Response) => {
    res.send('Hello next level backend developer')
})

// users crud
app.use('/users', userRoutes);


// todos crud
app.use('/todos', todoRouter)

// user auth
app.use("/auth", authRoutes)

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
        path: req.path
    })
})

export default app;
