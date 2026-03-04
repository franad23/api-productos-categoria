import { Router } from "express";
import userRoutes from "./users.js";
import productRoutes from "./product.js";
import categoryRoutes from "./category.js";
import imagesRoutes from "./images.js";

const router = Router();

router.use("/user", userRoutes);
router.use("/products", productRoutes);
router.use("/categories", categoryRoutes);
router.use("/images", imagesRoutes);
router.get("/status", async (req, res) => {
const state = mongoose.connection.readyState;

    const states = {
        0: "disconnected",
        1: "connected",
        2: "connecting",
        3: "disconnecting"
    };

    let error = null;

    try {
        // Intentamos hacer ping real a la DB
        if (state === 1) {
            await mongoose.connection.db.admin().ping();
        }
    } catch (err) {
        error = {
            message: err.message,
            name: err.name
        };
    }

    res.status(state === 1 && !error ? 200 : 500).json({
        database: states[state],
        readyState: state,
        error: error
    });
})

export default router;
