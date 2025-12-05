import { pool } from "../../config/db";


const postTodo = async (user_id: string, title: string, description: string) => {
    const result = await pool.query(`INSERT INTO todos(user_id,title,description) VALUES($1,$2,$3) RETURNING *`, [user_id, title, description]);
    return result;
}

export const todoService = {
    postTodo
}