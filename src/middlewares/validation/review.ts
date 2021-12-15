import { createValidator } from "express-joi-validation";
import {
  ReviewIdParamValidationSchema,
  ReviewValidationSchema,
} from "./schemas";
const reviewValidationMiddlewareCreator = createValidator();

export const reviewValidationMiddleware =
  reviewValidationMiddlewareCreator.body(ReviewValidationSchema);

export const reviewIdParamValidationMiddleware =
  reviewValidationMiddlewareCreator.params(ReviewIdParamValidationSchema);
