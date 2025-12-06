import express from "express";
import { logger } from "./middleware/logger";
import { errorHandler } from "./middleware/errorHandler";
import bookRoutes from "./routes/bookRoutes";
const app = express();
const PORT = 3000;

app.use(express.json(), logger);


app.use("/api/movies/", bookRoutes)

app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`server running on ${PORT} port`)
});