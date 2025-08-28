import express from "express";
import connectDB from "./config/dbConfig.js";
import apiRouter from "./routers/apiRouter.js";
import multer from "multer";

const PORT = 3000; // port number

const app = express(); // Create an Express app server instance

const upload = multer(); // for parsing multipart/form-data

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(express.text()); // Middleware to parse text request bodies
app.use(express.urlencoded()); // Middleware to parse URL-encoded request bodies

app.use("/api", apiRouter); // If the request URL starts with /api, use apiRouter to handle it

app.get("/ping", (req, res) => {
  console.log(req.query);
  console.log(req.body);
  return res.json({ message: "pong" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
