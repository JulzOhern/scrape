import express from "express";
import { mangamonksHome } from "../../controllers/mangamonks/home.js";
import { mangamonksInfo } from "../../controllers/mangamonks/info.js";
import { mangamonksRead } from "../../controllers/mangamonks/read.js";
import { mangamonksChapters } from "../../controllers/mangamonks/chapters.js";
import { mangamonksLatestRelease } from "../../controllers/mangamonks/latest-release.js";
import { mangamonksPopular } from "../../controllers/mangamonks/popular.js";
import { mangamonksGenre } from "../../controllers/mangamonks/genre.js";
import { mangamonksCollections } from "../../controllers/mangamonks/collections.js";
import { mangamonksCollection } from "../../controllers/mangamonks/collection.js";

const router = express.Router();

router.get("/home", mangamonksHome);

router.get("/latest-release", mangamonksLatestRelease);

router.get("/popular", mangamonksPopular);

router.get("/collections", mangamonksCollections);

router.get("/collection/:collectionId", mangamonksCollection);

router.get("/genre/:genre", mangamonksGenre);

router.get("/info/:infoId", mangamonksInfo);

router.get("/chapters/:chapterId", mangamonksChapters);

router.get("/read/:infoId/:chapter", mangamonksRead);

export default router;
