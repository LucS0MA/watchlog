import { Router } from "express";

import {
  deleteUser,
  getAllUsers,
  getUserById,
  login,
  register,
  updateUser,
} from "../controllers/user.controllers.js";

export const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.get("/login/:id", login);
userRouter.delete("/:id", deleteUser);
userRouter.post("/", register);
userRouter.put("/:id", updateUser);
