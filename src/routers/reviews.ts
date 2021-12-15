import { Router } from "express";
import { ReviewsRoutes } from "../types/routes";
import {
  createReview,
  removeReview,
  getReviews,
  getReviewById,
  updateReview,
} from "./../controllers/review";
import {
  reviewIdParamValidationMiddleware,
  reviewValidationMiddleware,
} from "../middlewares/validation";

export const reviewRouter: Router = Router();

reviewRouter.get(ReviewsRoutes.Get, getReviews);
reviewRouter.get(
  ReviewsRoutes.GetById,
  reviewIdParamValidationMiddleware,
  getReviewById
);
reviewRouter.post(
  ReviewsRoutes.Create,
  reviewValidationMiddleware,
  createReview
);
reviewRouter.put(
  ReviewsRoutes.Update,
  reviewIdParamValidationMiddleware,
  reviewValidationMiddleware,
  updateReview
);
reviewRouter.delete(
  ReviewsRoutes.Remove,
  reviewIdParamValidationMiddleware,
  removeReview
);
