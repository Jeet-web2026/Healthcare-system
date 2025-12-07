import express from "express";
import { userRegister } from "../controllers/authController.js";

const router = express.Router();

router.get("/", userRegister);

export default router;
