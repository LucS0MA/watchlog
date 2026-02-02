import { Request, Response } from "express";

import { MovieService } from "../services/movie.services.js";

export const getAllMovies = async (_req: Request, res: Response) => {
  try {
    const movies = await MovieService.getAll();

    res.status(200).json(movies);
  } catch (err) {
    console.error("Error trying to retrieve all the movies", err);

    res.status(500).json({
      error: "Failed to retrieve movies",
      message: err instanceof Error ? err.message : "unknow error",
    });
  }
};

export const getMovieById = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);

    const movie = await MovieService.getMovieById(id);
    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }

    res.status(200).json(movie);
  } catch (err) {
    console.error("Error trying to find the movie", err);

    res.status(500).json({
      error: "Failed to retrieve the movie",
      message: err instanceof Error ? err.message : "unknown error",
    });
  }
};
