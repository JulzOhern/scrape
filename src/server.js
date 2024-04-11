import express from "express";
import cors from "cors";
import { config } from "dotenv";
import readmRouter from "./routes/readm/index.js";
import mangafreakRouter from "./routes/mangafreak/index.js";

config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.get("/", async (_, res) => res.send("Web Scrapping"));

app.use("/readm", readmRouter);
app.use("/mangafreak", mangafreakRouter);

app.listen(PORT, () => console.log("http://localhost:" + PORT));
