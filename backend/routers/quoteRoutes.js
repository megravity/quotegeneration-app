import { Router } from "express";
import { favoriteQuote } from "../controllers/quoteController.js";

const router = Router();

router.post("/:id", favoriteQuote);

export default router;
