import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

export const DB_URL = process.env.DB_URL; // MongoDB connection string

export const ACCESS_KEY_ID = process.env.ACCESS_KEY_ID; // AWS Access Key ID

export const SECRET_ACCESS_KEY = process.env.SECRET_ACCESS_KEY; // AWS Secret Access Key

export const AWS_REGION = process.env.AWS_REGION; // AWS Region

export const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME; // AWS S3 Bucket Name

export const JWT_SECRET = process.env.JWT_SECRET; // JWT Secret Key
