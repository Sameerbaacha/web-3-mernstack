import { Request, Response } from "express";
import { allBooks, Book } from "../data/books";

// Get all books
export const getAllBooks = (req: Request, res: Response) => {
    return res.status(200).json({
        message: "All books received",
        data: allBooks
    });
};

// Get single book
export const getSingleBook = (req: Request, res: Response) => {
    const bookId = parseInt(req.params.id);

    if (isNaN(bookId))
        return res.status(400).json({ message: "Book id is required" });

    const book = allBooks.find(b => b.id === bookId);

    if (!book)
        return res.status(404).json({ message: "Book not Found" });

    res.status(200).json({
        message: "Required Book Found",
        data: book
    });
};

// Create a book
export const createBook = (req: Request, res: Response) => {
    const { title, author } = req.body;

    if (!author || !title)
        return res.status(400).json({ message: "Title or Author not found" });

    const newBook: Book = {
        id: allBooks.length + 1,
        title,
        author
    };

    allBooks.push(newBook);

    return res.status(201).json({
        message: "Book Added Successfully!",
        data: newBook
    });
};

// Delete a book
export const deleteBook = (req: Request, res: Response) => {
    const deleteId = parseInt(req.params.id);

    if (isNaN(deleteId))
        return res.status(400).json({ message: "delete id is Required" });

    const index = allBooks.findIndex(book => book.id === deleteId);

    if (index === -1)
        return res.status(404).json({ message: "Book not found" });

    const deletedBook = allBooks.splice(index, 1);

    res.status(200).json({
        message: "Deleted Successfully",
        data: deletedBook
    });
};

// Update a book
export const updateBook = (req: Request, res: Response) => {
    const updID = parseInt(req.params.id);

    if (isNaN(updID))
        return res.status(400).json({ messgae: "Update id is Required" });

    const updIndex = allBooks.findIndex(book => book.id === updID);

    if (updIndex === -1)
        return res.status(404).json({ message: "Book not found" });

    const { title, author } = req.body;

    if (!title && !author)
        return res.status(400).json({
            message: "title or author is required for update"
        });

    const updatedBook: Book = {
        id: updID,
        title,
        author
    };

    allBooks[updIndex] = updatedBook;

    res.status(200).json({
        message: "Item Updated Successfully",
        data: updatedBook
    });
};
