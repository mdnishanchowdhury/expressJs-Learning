import express, { Request, Response } from "express";
import { userControllers } from "./user.controller";
import logger from "../../middleware/logger";
import auth from "../../middleware/auth";

const router = express.Router();


router.post("/", userControllers.createUser);

router.get("/", logger, auth("admin"), userControllers.getUser);

router.get("/:id", auth("admin", "user"), userControllers.getSingleUser);

router.put("/:id", userControllers.putSingleUser);

router.delete("/:id", userControllers.deleteSingleUser);

export const userRoutes = router;