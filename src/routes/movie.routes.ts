import { Router } from "express";

import {
  deleteMovie,
  getAllMovies,
  getMovieById,
} from "../controllers/movie.controllers.js";

export const movieRouter = Router();

movieRouter.get("/", getAllMovies);
movieRouter.get("/:id", getMovieById);
movieRouter.delete("/:id", deleteMovie);
