import { Review } from "../models/review.models.js";
import { reviewService } from "../services/review.services.js";
import { Request, Response } from "express";

export const getAllReviews = async (_req: Request, res: Response) => {
  try {
    const reviews = await reviewService.getAllReviews();
    res.status(200).json({ message: "All the reviews are retrive", reviews });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to retrieve the reviews",
      message: err instanceof Error ? err.message : "unkown error",
    });
  }
};

export const getReviewByid = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    if (!id) {
      return res.status(400).json({ message: "No id provided" });
    }
    const review = await reviewService.getReviewById(id);
    console.log("in controller", review);
    if (!review) {
      return res.status(400).json({ message: "Review not found" });
    }
    res.status(200).json({ message: "Review retrieved ! ", review });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to retrieve the review",
      message: err instanceof Error ? err.message : "unkown error",
    });
  }
};

export const deleteReview = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    if (!id) {
      return res.status(400).json({ message: "No id provided" });
    }
    const reviewDeleted = await reviewService.deteleReview(id);
    if (!reviewDeleted) {
      return res.status(400).json({ message: "Review not found" });
    }
    res.status(200).json({ message: "Review deleted", reviewDeleted });
  } catch (err) {
    res.status(500).json({
      error: "Failed to delete the review",
      message: err instanceof Error ? err.message : "unkown error",
    });
  }
};

export const createReview = async (req: Request, res: Response) => {
  try {
    const reviewData = req.body as Review;
    reviewData.created_at = new Date();
    const newReview = await reviewService.createReview(reviewData);
    res.status(200).json({ message: "Review created", newReview });
  } catch (err) {
    res.status(500).json({
      error: "Failed to create the review",
      message: err instanceof Error ? err.message : "unkown error",
    });
  }
};

export const updateReview = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    if (!id) {
      return res.status(400).json({ message: "No id provided" });
    }
    const reviewData = req.body as Partial<Review>;
    const reviewUpdated = await reviewService.updateReview(id, reviewData);
    console.log("in controller", reviewUpdated);
    res.status(200).json({ message: "Review updated !", reviewUpdated });
  } catch (err) {
    res.status(500).json({
      error: "Failed to update the review",
      message: err instanceof Error ? err.message : "unkown error",
    });
  }
};
