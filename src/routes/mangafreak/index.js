import express from "express";
import { mangafreakHome } from "../../controllers/mangafreak/home.js";
import { mangafreakRead } from "../../controllers/mangafreak/read.js";
import { mangafreakNewRelease } from "../../controllers/mangafreak/new-release.js";
import { mangafreakGenre } from "../../controllers/mangafreak/genre.js";
import { mangafreakSearch } from "../../controllers/mangafreak/search.js";

const router = express.Router();

router.get("/home", mangafreakHome);

router.get("/new-release", mangafreakNewRelease);

router.get("/genre", mangafreakGenre);

router.get("/search", mangafreakSearch);

router.get("/read/:chapterId", mangafreakRead);

export default router;
