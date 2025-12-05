import { Request, Response } from "express";
import { authServices } from "./auth.service";

const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    console.log(req.body)
   
     try {  const result = await authServices.loginUser(email, password)
    
            res.status(200).json({
                success: true,
                message: "login successfull",
                data: result
            })
        } catch (error: any) {
            res.status(500).json({
                success: true,
                message: error.message,
                datails: error
            })
        }
}

export const authController ={
    loginUser
}