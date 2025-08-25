import express from "express";
import connectDB from "./config/dbConfig.js";
import postRouter from "./routers/post.js";
import userRouter from "./routers/user.js";

const PORT = 3000; // port number

const app = express(); // Create an Express app server instance

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(express.text()); // Middleware to parse text request bodies
app.use(express.urlencoded()); // Middleware to parse URL-encoded request bodies

app.use("/posts", postRouter);

app.use("/users", userRouter);

app.get("/ping", (req, res) => {
  console.log(req.query);
  console.log(req.body);
  return res.json({ message: "pong" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
