
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

const app = express();

// Security-related HTTP headers
app.use(helmet());

// Allow requests from the frontend
app.use(cors());

// Parse incoming JSON request bodies
app.use(express.json());

// Parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Limit repeated requests
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: "draft-8",
    legacyHeaders: false,
});

app.use("/api", limiter);

// Health-check endpoint
app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Travel backend is running",
    });
});

// Handle unknown routes
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});

export default app;
