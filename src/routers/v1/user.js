import express from "express";
import { getProfile } from "../../controllers/userController.js";

const router = express.Router(); // router object to modularize routes

router.get("/profile", getProfile);
export default router;
