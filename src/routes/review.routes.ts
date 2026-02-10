import {
  createReview,
  deleteReview,
  getAllReviews,
  getReviewByid,
  updateReview,
} from "../controllers/reviews.controllers.js";
import { Router } from "express";

export const reviewRouter = Router();

reviewRouter.get("/", getAllReviews);
reviewRouter.get("/:id", getReviewByid);
reviewRouter.delete("/:id", deleteReview);
reviewRouter.post("/", createReview);
reviewRouter.put("/:id", updateReview);
