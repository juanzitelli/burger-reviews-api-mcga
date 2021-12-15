import Joi from "joi";
import { Review } from "../../../types/entities";

export const ReviewValidationSchema = Joi.object<{ review: Review }>({
  review: Joi.object({
    name: Joi.string().required(),
    description: Joi.string().max(140).required(),
    place: Joi.string().required(),
    date: Joi.date().required(),
    burger_score: Joi.number().required().min(1).max(10),
    fries_score: Joi.number().required().min(1).max(10),
    bread_score: Joi.number().required().min(1).max(10),
    is_vegan_friendly: Joi.boolean().required(),
  }).required(),
});

export const ReviewIdParamValidationSchema = Joi.object({
  id: Joi.string().required().length(24).hex(),
});
