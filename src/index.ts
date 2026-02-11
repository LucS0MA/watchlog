import cookieParser from "cookie-parser";
import express from "express";

import { pool } from "./config/database.js";
import { movieRouter } from "./routes/movie.routes.js";
import { userRouter } from "./routes/user.routes.js";
import { reviewRouter } from "./routes/review.routes.js";
import { NowResult } from "#types/dbConnection.types.js";

const app = express();
const port = process.env.PORT ?? 3000;

app.use(cookieParser());
app.use(express.json());
app.use("/movies", movieRouter);
app.use("/users", userRouter);
app.use("/reviews", reviewRouter);

const dbConnection = async () => {
  try {
    const { rows } = await pool.query<NowResult>(`SELECT NOW()`);
    console.log("✅ Database connected at", rows[0].now);
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
