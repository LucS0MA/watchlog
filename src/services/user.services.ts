import { pool } from "../config/database.js";
import { UserRow } from "../types/user.types.js";

export const userService = {
  getAll: async () => {
    const { rows } = await pool.query<UserRow>("SELECT * FROM users");
    return rows;
  },
  getUserById: async (id: null | string) => {
    console.log(id);
    const user = await pool.query<UserRow>(
      "SELECT * FROM users WHERE id = $1",
      [id],
    );
    return user.rows[0] ?? null;
  },
};
