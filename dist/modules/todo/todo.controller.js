"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoController = void 0;
const todo_service_1 = require("./todo.service");
const postTodo = async (req, res) => {
    const { user_id, title, description } = req.body;
    console.log(req.body);
    try {
        const result = await todo_service_1.todoService.postTodo(user_id, title, description);
        res.status(201).json({
            success: true,
            message: "succussfully todos created",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
exports.todoController = {
    postTodo
};
