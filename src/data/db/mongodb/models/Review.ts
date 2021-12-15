import { ReviewDocument } from "../../../../types/models";

import { Schema, model as Model } from "mongoose";
import { Review } from "../../../../types/entities";

const ReviewSchema = new Schema<Review>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  burger_score: {
    type: Number,
    min: 1,
    max: 10,
    required: true,
  },
  fries_score: {
    type: Number,
    min: 1,
    max: 10,
    required: true,
  },
  bread_score: {
    type: Number,
    min: 1,
    max: 10,
    required: true,
  },
  is_vegan_friendly: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

export const ReviewModel = Model<ReviewDocument>("Review", ReviewSchema);
