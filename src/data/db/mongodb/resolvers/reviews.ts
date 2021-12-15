import { Review } from "../../../../types/entities";
import { ReviewModel } from "../models";

type ReviewWithoutId = Omit<Review, "id">;

export const getReviews = async () => {
  return await ReviewModel.find({});
};

export const createReview = async ({ review }: { review: ReviewWithoutId }) => {
  const addedReview = new ReviewModel({ ...review });
  return await addedReview.save();
};

export const getReviewById = async ({ id }: { id: string }) => {
  return ReviewModel.findById(id);
};

export const updateReview = async ({
  id,
  review,
}: {
  review: ReviewWithoutId;
  id: string;
}) => {
  return ReviewModel.findByIdAndUpdate(id, review);
};

export const removeReview = async ({ id }: { id: string }) => {
  return ReviewModel.findByIdAndDelete(id);
};
