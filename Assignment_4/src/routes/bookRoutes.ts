import { Router } from "express";
import { deleteMovie, getAllMovies, getsingleMovie, newMovie, updateMovie } from "../controllers/bookcontroller";


const router = Router();

router.get("/", getAllMovies);
router.get("/:id", getsingleMovie);
router.post("/create", newMovie)
router.delete("/delete/:id", deleteMovie)
router.put("/update/:id", updateMovie);

export default router;