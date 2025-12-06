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
router.post("/create", createBook);
router.delete("/delete/:id", deleteBook);
router.put("/update/:id", updateBook);

export default router;
