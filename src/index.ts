import express from "express";
import fs from "fs";

import { pool } from "./config/database.js";
import { movieRouter } from "./routes/movie.routes.js";
import { movieTitle } from "./types/tableRow.types.ts.js";

const app = express();
const port = process.env.PORT ?? 3000;

const content = fs.readFileSync("src/lib/seed.sql", "utf-8");

app.use("/movies", movieRouter);

const dbConnection = async () => {
  try {
    const { rows } = await pool.query<movieTitle>(`SELECT * FROM movies;`);
    if (rows.length === 0) {
      await pool.query(content);
      console.log("🌱Database seeded");
    }
    console.log("✅ Database connected");
    app.get("/", (_req, res) => {
      res.send("API watchlog");
    });

    app.listen(port, () => {
      console.log("BoilerPlate API app is listenning on port 3000 !");
    });
  } catch (error) {
    console.error("❌ Database connection failed", error);
    process.exit(1);
  }
};

dbConnection().catch((err: unknown) => {
  console.error("dbConnection failed", err);
  process.exit(1);
});
