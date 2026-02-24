import { Router } from "express";
import userRoutes from "./users.js";

const router = Router();

router.use('/user', userRoutes);

export default router;