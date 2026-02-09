import { Request, Response } from "express";

import { userService } from "../services/user.services.js";

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await userService.getAll();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to get all the users",
      message: err instanceof Error ? err.message : "unknown error",
    });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);

    if (!id) {
      return res.status(404).json({ error: "No id provided" });
    }

    const user = await userService.getUserById(id);
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to get the user",
      message: err instanceof Error ? err.message : "unknown error",
    });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);

    if (!id) {
      return res.status(404).json({ error: "No id provided" });
    }

    const userDeleted = await userService.deleteUser(id);
    res.status(200).json(userDeleted);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to delete the user",
      message: err instanceof Error ? err.message : "unkown error",
    });
  }
};
