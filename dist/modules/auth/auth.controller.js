"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const auth_service_1 = require("./auth.service");
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    try {
        const result = await auth_service_1.authServices.loginUser(email, password);
        res.status(200).json({
            success: true,
            message: "login successfull",
            data: result
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
exports.authController = {
    loginUser
};
