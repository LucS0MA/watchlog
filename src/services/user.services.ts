import { pool } from "../config/database.js";
import { User } from "../models/user.models.js";
import { UserPublic, UserRow } from "../types/user.types.js";

export const userService = {
  createUser: async (userData: User): Promise<UserPublic> => {
    const newUser = await pool.query<UserRow>(
      "INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING id, username",
      [userData.username, userData.email, userData.password_hash],
    );
    return newUser.rows[0];
  },

  deleteUser: async (id: string): Promise<UserPublic> => {
    const userDelete = await pool.query<UserRow>(
      "DELETE FROM users WHERE id = $1 RETURNING id, username, email",
      [id],
    );
    return userDelete.rows[0];
  },
  getAll: async (): Promise<UserRow[]> => {
    const { rows } = await pool.query<UserRow>(
      "SELECT id, username, email FROM users",
    );
    return rows;
  },
  getUserById: async (id: string): Promise<null | UserPublic> => {
    const user = await pool.query<UserRow>(
      "SELECT id, username, email FROM users WHERE id = $1",
      [id],
    );
    return user.rows[0] ?? null;
  },
  updateUser: async (
    id: string,
    userData: Partial<User>,
  ): Promise<UserPublic> => {
    const userUpdated = await pool.query<UserRow>(
      "UPDATE USERS SET username = COALESCE($1, username), email = COALESCE($2, email), password_hash = COALESCE($3, password_hash) WHERE id = $4 RETURNING id, username, email",
      [userData.username, userData.email, userData.password_hash, id],
    );
    return userUpdated.rows[0];
  },
};
