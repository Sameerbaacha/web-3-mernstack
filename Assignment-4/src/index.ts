import express from "express";
import bookRoutes from "./routes/bookRoutes";
import logger from "./middleware/logger";
import errorHandler from "./middleware/errorHandler";

const app = express();
app.use(express.json());
app.use(logger);

app.use("/api/books", bookRoutes);

app.use(errorHandler);

app.listen(3000, () => console.log("Server running"));
