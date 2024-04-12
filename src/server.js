import express from "express";
import cors from "cors";
import { config } from "dotenv";
import readmRouter from "./routes/manga/readm/index.js";
import mangafreakRouter from "./routes/manga/mangafreak/index.js";
import mangamonksRouter from "./routes/manga/mangamonks/index.js";

config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.get("/", async (_, res) => res.send(`<h1>Manga scrape</h1>`));

app.use("/readm", readmRouter);
app.use("/mangafreak", mangafreakRouter);
app.use("/mangamonks", mangamonksRouter);

app.listen(PORT, () => console.log("http://localhost:" + PORT));
