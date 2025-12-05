import { Request, Response } from "express";
import { userServices } from "./user.service";
import { pool } from "../../config/db";

const createUser = async (req: Request, res: Response) => {
    // console.log(req.body);
    // const { name, email ,password} = req.body;

    try {
        const result = await userServices.createUser(req.body);
        // console.log(result.rows[0]);

        res.status(201).json({
            success: true,
            message: "Data instered successfully",
            data: result.rows[0]
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}


const getUser = async (req: Request, res: Response) => {
    try {
        const result = await userServices.getUser();

        res.status(200).json({
            success: true,
            message: "Users retrieved successfully",
            data: result.rows
        })
    } catch (error: any) {
        res.status(500).json({
            success: true,
            message: error.message,
            datails: error
        })
    }
}

const getSingleUser = async (req: Request, res: Response) => {
    try {
        // console.log(req.params.id)
        const result = await userServices.getSingleUser(req.params.id as string);

        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "User not Found",
            })
        }
        else {
            res.status(200).json({
                success: true,
                message: "User fetched successfully",
                data: result.rows[0]
            })
        }
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

const putSingleUser = async (req: Request, res: Response) => {

    const { name, email } = req.body;
    try {
        const result = await userServices.putSingleUser(name, email, req.params.id as string);

        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "User not Found",
            })
        }
        else {
            res.status(200).json({
                success: true,
                message: "User Updated successfully",
                data: result.rows[0]
            })
        }
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

const deleteSingleUser = async (req: Request, res: Response) => {
    try {
        // console.log(req.params.id)
        const result = await userServices.deleteSingleUser(req.params.id as string)

        if (result.rowCount === 0) {
            res.status(404).json({
                success: false,
                message: "User not Found",
            })
        }
        else {
            res.status(200).json({
                success: true,
                message: "User Deleted Successfully",
                data: result.rows,
            })
        }
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}


export const userControllers = {
    createUser,
    getUser,
    getSingleUser,
    putSingleUser,
    deleteSingleUser
}