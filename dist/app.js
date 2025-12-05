"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
const logger_1 = __importDefault(require("./middleware/logger"));
const user_routes_1 = require("./modules/user/user.routes");
const todo_router_1 = require("./modules/todo/todo.router");
const auth_routes_1 = require("./modules/auth/auth.routes");
const app = (0, express_1.default)();
// parser json data anta use kora hoi
app.use(express_1.default.json());
// from data jnno
// app.use(express.urlencoded())
app.use(express_1.default.urlencoded({ extended: true }));
(0, db_1.default)();
app.get('/', logger_1.default, (req, res) => {
    res.send('Hello next level backend developer');
});
// users crud
app.use('/users', user_routes_1.userRoutes);
// todos crud
app.use('/todos', todo_router_1.todoRouter);
// user auth
app.use("/auth", auth_routes_1.authRoutes);
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
        path: req.path
    });
});
exports.default = app;
