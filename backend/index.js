import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import quoteRoutes from "./routers/quoteRoutes.js";
import userRoutes from "./routers/userRoutes.js";
import cors from "cors";
import fileUpload from "express-fileupload";

// Config

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173", exposedHeaders: ["token"] }));
app.use(fileUpload());

// Routes

app.use("/quotes", quoteRoutes);
app.use("/users", userRoutes);

mongoose.connect(process.env.URI).then(() => {
    console.log("Connected to DB 🦖");
    app.listen(PORT, () => console.log(`Server running on port: ${PORT} 🐶`));
});
