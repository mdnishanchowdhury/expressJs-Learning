"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userControllers = void 0;
const user_service_1 = require("./user.service");
const createUser = async (req, res) => {
    // console.log(req.body);
    // const { name, email ,password} = req.body;
    try {
        const result = await user_service_1.userServices.createUser(req.body);
        // console.log(result.rows[0]);
        res.status(201).json({
            success: true,
            message: "Data instered successfully",
            data: result.rows[0]
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
const getUser = async (req, res) => {
    try {
        const result = await user_service_1.userServices.getUser();
        res.status(200).json({
            success: true,
            message: "Users retrieved successfully",
            data: result.rows
        });
    }
    catch (error) {
        res.status(500).json({
            success: true,
            message: error.message,
            datails: error
        });
    }
};
const getSingleUser = async (req, res) => {
    try {
        // console.log(req.params.id)
        const result = await user_service_1.userServices.getSingleUser(req.params.id);
        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "User not Found",
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: "User fetched successfully",
                data: result.rows[0]
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
const putSingleUser = async (req, res) => {
    const { name, email } = req.body;
    try {
        const result = await user_service_1.userServices.putSingleUser(name, email, req.params.id);
        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "User not Found",
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: "User Updated successfully",
                data: result.rows[0]
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
const deleteSingleUser = async (req, res) => {
    try {
        // console.log(req.params.id)
        const result = await user_service_1.userServices.deleteSingleUser(req.params.id);
        if (result.rowCount === 0) {
            res.status(404).json({
                success: false,
                message: "User not Found",
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: "User Deleted Successfully",
                data: result.rows,
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
exports.userControllers = {
    createUser,
    getUser,
    getSingleUser,
    putSingleUser,
    deleteSingleUser
};
