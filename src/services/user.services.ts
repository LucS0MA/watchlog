import { pool } from "../config/database.js";
import { UserRow } from "../types/user.types.js";

export const userService = {
  deleteUser: async (id: null | string) => {
    const userDeleted = await pool.query(
      "DELETE FROM users WHERE id = $1 RETURNING *",
      [id],
    );
    return userDeleted;
  },
  getAll: async () => {
    const { rows } = await pool.query<UserRow>("SELECT * FROM users");
    return rows;
  },
  getUserById: async (id: null | string) => {
    const user = await pool.query<UserRow>(
      "SELECT * FROM users WHERE id = $1",
      [id],
    );
    return user.rows[0] ?? null;
  },
};
