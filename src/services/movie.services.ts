import { pool } from "../config/database.js";
import { movie } from "../types/movies.types.js";

export const MovieService = {
  getAll: async (): Promise<movie[]> => {
    const { rows } = await pool.query<movie>("SELECT * FROM movies");
    return rows;
  },
  getMovieById: async (id: string): Promise<movie | null> => {
    const { rows } = await pool.query<movie>(
      "SELECT * FROM movies WHERE id = $1",
      [id],
    );

    return rows[0] ?? null;
  },
};
