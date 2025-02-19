import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "development.local"}` }); //for pointing to the right env file

export const {
  PORT,
  NODE_ENV,
  DB_URI,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  ARCJET_ENV,
  ARCJET_KEY,
} = process.env; //for exporting the variables from the env file
