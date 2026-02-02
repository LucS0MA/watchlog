import express from "express";

import { pool } from "./config/database.js";
import { TableRow } from "./types/tableRow.js";

const app = express();
const port = process.env.PORT ?? 3000;

const dbConnection = async () => {
  try {
    const { rows } = await pool.query<TableRow>(
      `SELECT tablename
    FROM pg_catalog.pg_tables
    WHERE schemaname = 'public';`,
    );
    console.log(
      "📦 Tables found:",
      rows.map((table) => table.tablename),
    );
    console.log("✅ Database connected");
    app.get("/", (_req, res) => {
      res.send("API boilerplate");
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
