import AWS from "aws-sdk";
import {
  ACCESS_KEY_ID,
  SECRET_ACCESS_KEY,
  AWS_REGION,
} from "./serverConfig.js";

export const s3 = new AWS.S3({
  region: AWS_REGION,
  accessKeyId: ACCESS_KEY_ID,
  secretAccessKey: SECRET_ACCESS_KEY,
});
