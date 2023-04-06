import { Router } from "express";
import {
    addUser,
    getQuotes,
    loginUser,
    verifyToken,
    removeQuote,
} from "../controllers/userController.js";

const router = Router();

router.get("/verifytoken", verifyToken);

router.get("/getquotes/:id", getQuotes);

router.post("/removequote/:id", removeQuote);

router.post("/signup", addUser);

router.post("/login", loginUser);

export default router;
