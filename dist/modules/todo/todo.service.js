"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoService = void 0;
const db_1 = require("../../config/db");
const postTodo = async (user_id, title, description) => {
    const result = await db_1.pool.query(`INSERT INTO todos(user_id,title,description) VALUES($1,$2,$3) RETURNING *`, [user_id, title, description]);
    return result;
};
exports.todoService = {
    postTodo
};
