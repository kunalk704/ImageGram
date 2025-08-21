import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

export const DB_URL = process.env.DB_URL; // MongoDB connection string
