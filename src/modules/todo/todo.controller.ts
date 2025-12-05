import { Request, Response } from "express";
import { pool } from "../../config/db";
import { todoService } from "./todo.service";


const postTodo = async (req: Request, res: Response) => {
    const { user_id, title, description } = req.body;
console.log(req.body);

    try {
        const result = await todoService.postTodo(user_id, title, description)
        res.status(201).json({
            success: true,
            message: "succussfully todos created",
            data: result
        })

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const todoController = {
    postTodo
}