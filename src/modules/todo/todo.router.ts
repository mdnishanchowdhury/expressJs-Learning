import express from "express"
import { todoController } from "./todo.controller";
const router = express.Router();

router.post('/', todoController.postTodo);


export const todoRouter = router;