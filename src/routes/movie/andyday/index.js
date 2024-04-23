import express from "express";
import { andydayHome } from "../../../controllers/movie/andyday/home.js";
import { andydayMovieInfo } from "../../../controllers/movie/andyday/movie-info.js";

const router = express.Router();

router.get("/home", andydayHome);

router.get("/movie/info/:infoId", andydayMovieInfo);

export default router;
