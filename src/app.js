import express from "express";
import router from "./routes/index.js"
import cors from "cors";
import { FRONT_URL } from "./config/env.js";

const app = express();
app.use(cors({
    origin: [FRONT_URL]
}));
app.use(express.json());
app.use('/api', router)

export default app;