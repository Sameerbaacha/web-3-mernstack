import express, { Request, Response } from "express";
const app = express();
app.use(express.json());
const PORT = 3000;

type Boooks = {
    id: number,
    title: string,
    author: string,
}
const allBooks: Boooks[] = [
    {
        id: 1,
        title: "The history of Kohistan",
        author: "Sameer Khan"
    },
    {
        id: 2,
        title: "The history of Afridi",
        author: "M.Waqas"
    },
    {
        id: 3,
        title: "The history of Chitral",
        author: "Faiz-ur-rehman"
    },
]
//////////////////////////  GET   //////////////////////////////////

app.get("/allbooks", (req: Request, res: Response) => {
    return res.status(200).json({ message: "All books recieved", data: allBooks });
});

//////////////////////////  GET   //////////////////////////////////

app.get("/book/:id", (req: Request, res: Response) => {
    const bookId: number = parseInt(req.params.id)

    if (isNaN(bookId)) return res.status(400).json({ message: "Book id is required" });

    const book = allBooks.find((books: { id: number, title: string, author: string }) => books.id === bookId);

    if (!book) return res.status(404).json({ message: "Book not Found" });

    res.status(200).json({ message: "Required Book Found", data: book });
});

//////////////////////////  POST   //////////////////////////////////

app.post("/create", (req: Request, res: Response) => {
    const { title, author } = req.body
    if (!author || !title) return res.status(400).json({ message: "Title or Author not found" });

    type newBook = { id: number, title: string, author: string, };

    const addBook: newBook = { id: allBooks.length + 1, title, author };
    allBooks.push(addBook);

    return res.status(200).json({ message: "Book Added Successfully!", data: addBook });
});

//////////////////////////  GET   //////////////////////////////////

app.delete("/delete/:id", (req: Request, res: Response) => {
    const deleteId: number = parseInt(req.params.id)

    if (isNaN(deleteId)) return res.status(400).json({ messgae: "delete id is Required" })

    const index = allBooks.findIndex((book: { id: number }) => book.id === deleteId)

    if (index === -1) return res.status(404).json({ message: "Book not found" })

    const deletedBook = allBooks.splice(index, 1)

    res.status(200).json({ messgae: "Deleted Succcessfully", data: deletedBook })
})

//////////////////////////  PUT   //////////////////////////////////

app.put("/update/:id", (req: Request, res: Response) => {
    const updID = parseInt(req.params.id)
    if (isNaN(updID)) return res.status(400).json({ messgae: "Update id is Required" })

    const updIndex = allBooks.findIndex((book: { id: number }) => book.id === updID)
    if (updIndex === -1) return res.status(404).json({ message: "Book not found" })

    const { title, author } = req.body;

    if (!title && !author) return res.status(400).json({ message: "title or author is required for update" });

    type newUpdObj = { id: number, title: string, author: string };
    const updObj: newUpdObj = { id: updID, title, author };

    allBooks[updIndex] = updObj
    res.status(200).json({ messgae: "Item Updated  Succcessfully", data: allBooks })

})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})