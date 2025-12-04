import { Router } from "express";
import {
    getAllBooks,
    getSingleBook,
    createBook,
    deleteBook,
    updateBook
} from "../controllers/bookController";

const router = Router();

router.get("/", getAllBooks);
router.get("/:id", getSingleBook);
router.post("/", createBook);
router.delete("/:id", deleteBook);
router.put("/:id", updateBook);

export default router;
