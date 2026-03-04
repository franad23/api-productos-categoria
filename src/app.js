import express from "express";
import router from "./routes/index.js"
import cors from "cors";

const app = express();
app.use(cors({
    origin: [FRONT_URL]
}));
app.use(express.json());
app.use('/api', router)

export default app;