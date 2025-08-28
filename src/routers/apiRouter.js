import express from "express";
import v1Router from "./v1/v1Router.js";

const router = express.Router(); // router object to modularize routes

router.use("/v1", v1Router);

export default router;
