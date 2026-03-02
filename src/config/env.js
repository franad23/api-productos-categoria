import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const JWT_PASSWORD = process.env.JWT_PASSWORD;
const CLOUDINARY_APIKEY = process.env.CLOUDINARY_APIKEY;

export { PORT, MONGO_URI, JWT_PASSWORD, CLOUDINARY_APIKEY };
