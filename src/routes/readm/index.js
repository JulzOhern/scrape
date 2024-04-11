import express from "express";
import { readmHome } from "../../controllers/readm/home.js";
import { readmInfo } from "../../controllers/readm/info.js";
import { readmChapters } from "../../controllers/readm/chapters.js";
import { readmImage } from "../../controllers/readm/image.js";
import { readmPopularManga } from "../../controllers/readm/popular-manga.js";
import { readmLatestUpdates } from "../../controllers/readm/latest-updates.js";
import { readmNewManga } from "../../controllers/readm/new-manga.js";
import { readmCategoryList } from "../../controllers/readm/category-list.js";
import { readmCategory } from "../../controllers/readm/category.js";
import { readmSearch } from "../../controllers/readm/search.js";

const router = express.Router();

router.get("/home", readmHome);

router.get("/popular-manga", readmPopularManga);

router.get("/latest-updates", readmLatestUpdates);

router.get("/new-manga", readmNewManga);

router.get("/category-list", readmCategoryList);

router.get("/search", readmSearch);

router.get("/category/:categoryId", readmCategory);

router.get("/info/:infoId", readmInfo);

router.get("/chapters/:infoId", readmChapters);

router.get("/image/:infoId/:chapter", readmImage);

export default router;
