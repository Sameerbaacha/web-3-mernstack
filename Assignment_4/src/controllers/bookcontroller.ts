import { Request, Response } from "express";
import { bollywoodFunnyMovies, Movie } from "../data/bookData";


// get all Movies 
export const getAllMovies = (req: Request, res: Response) => {
    return res.status(200).json({
        success: true,
        message: "All Movies Received",
        data: bollywoodFunnyMovies,
    })
};

// get single Movies 
export const getsingleMovie = (req: Request, res: Response) => {
    const movieId: number = parseInt(req.params.id);

    if (isNaN(movieId))
        return res.status(400).json({
            success: false,
            message: "Movie id is required",
        })

    const movies = bollywoodFunnyMovies.find((m: Movie) => m.id === movieId)
    if (!movies)
        return res.status(404).json({
            success: false,
            message: "Movie Not Found on given id",
        });

    return res.status(200).json({
        success: true,
        message: "Require Movie Found",
        data: movies
    })
};

// Create New Movie 
export const newMovie = (req: Request, res: Response) => {
    const { title, hero } = req.body

    if (!title || !hero)
        return res.status(400).json({
            success: false,
            message: "Title and Hero must be required",
        })

    const createdMovie: Movie = { id: bollywoodFunnyMovies.length + 1, title, hero };
    bollywoodFunnyMovies.push(createdMovie);

    return res.status(201).json({
        success: true,
        message: "Movie Created Successfully",
        data: createdMovie
    })
};

// delete a Movie
export const deleteMovie = (req: Request, res: Response) => {
    const deleteId: number = parseInt(req.params.id);

    if (isNaN(deleteId))
        return res.status(400).json({
            success: false,
            message: "Movie id is required for delete a movie",
        })

    const index = bollywoodFunnyMovies.findIndex((m: Movie) => m.id === deleteId)
    if (index === -1)
        return res.status(404).json({
            success: false,
            message: "Movie Not Found for delete",
        })

    const deletedMovie = bollywoodFunnyMovies.splice(index, 1)
    return res.status(200).json({
        success: true,
        message: "Movie deleted successfully",
        data: deletedMovie[0],
    })
}

//update a Movie
export const updateMovie = (req: Request, res: Response) => {
    const updateId: number = parseInt(req.params.id);

    if (isNaN(updateId))
        return res.status(400).json({ success: false, message: "Update id is Required" });

    const index = bollywoodFunnyMovies.findIndex((m: Movie) => m.id === updateId)
    if (index === -1)
        return res.status(404).json({
            success: false,
            message: "Movie Not Found for update",
        })

    const { title, hero } = req.body;

    if (!title && !hero)
        return res.status(400).json({
            message: "title or hero is required for update a movie"
        });


    const movieupdated: Movie = {
        id: updateId,
        title: title || bollywoodFunnyMovies[index].title,
        hero: hero || bollywoodFunnyMovies[index].hero,
    }
    bollywoodFunnyMovies[index] = movieupdated;

    return res.status(200).json({
        success: true,
        message: "Item Updated Successfully",
        data: movieupdated
    });
}