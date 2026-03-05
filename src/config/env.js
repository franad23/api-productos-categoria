import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const JWT_PASSWORD = process.env.JWT_PASSWORD;
const CLOUDINARY_SECRET = process.env.CLOUDINARY_SECRET;
const CLOUDINARY_CLOUDNAME = process.env.CLOUDINARY_CLOUDNAME;
const CLOUDINARY_APIKEY = process.env.CLOUDINARY_APIKEY;
const FRONT_URL = process.env.FRONT_URL;

export { FRONT_URL, PORT, MONGO_URI, JWT_PASSWORD, CLOUDINARY_APIKEY, CLOUDINARY_CLOUDNAME, CLOUDINARY_SECRET };
