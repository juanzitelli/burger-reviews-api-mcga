import { RequestHandler } from "express";
import { ErrorResponse, SuccessResponse } from "../types/controllers";
import { ReviewDocument } from "../types/models";
import * as db from "./../data/db/mongodb/resolvers/reviews";

export const getReviews: RequestHandler = async (_, res) => {
  try {
    const reviews: ReviewDocument[] = await db.getReviews();

    const successResponse: SuccessResponse<ReviewDocument> = {
      status: "ok",
      payload: { list: reviews },
    };

    return res.status(200).json(successResponse);
  } catch (error) {
    const errorResponse: ErrorResponse = {
      status: "error",
      msg: `An error occurred: ${error}`,
    };

    return res.status(400).json(errorResponse);
  }
};

export const getReviewById: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const review = await db.getReviewById({ id });

    if (review) {
      const successResponse: SuccessResponse<ReviewDocument> = {
        status: "ok",
        payload: {
          item: review,
        },
      };

      return res.status(200).json(successResponse);
    }

    throw new Error(`No found item with the id: ${id}`);
  } catch (error) {
    const errorResponse: ErrorResponse = {
      status: "error",
      msg: `An error occurred: ${error}`,
    };

    return res.status(400).json(errorResponse);
  }
};

export const createReview: RequestHandler = async (req, res) => {
  try {
    const { review } = req.body;

    const createdReview = await db.createReview({ review });

    const successResponse: SuccessResponse<ReviewDocument> = {
      status: "ok",
      payload: {
        item: createdReview,
      },
    };

    return res.status(200).json(successResponse);
  } catch (error) {
    const errorResponse: ErrorResponse = {
      status: "error",
      msg: `An error occurred: ${error}`,
    };

    return res.status(400).json(errorResponse);
  }
};

export const updateReview: RequestHandler = async (req, res) => {
  try {
    const { review } = req.body;
    const { id } = req.params;

    const updatedReview = await db.updateReview({ id, review });

    if (updatedReview) {
      const successResponse: SuccessResponse<any> = {
        status: "ok",
        payload: {
          item: { _id: updatedReview._id, ...review },
        },
      };

      return res.status(200).json(successResponse);
    }

    throw new Error(`No found item with the id: ${id}`);
  } catch (error) {
    const errorResponse: ErrorResponse = {
      status: "error",
      msg: `An error occurred: ${error}`,
    };

    return res.status(400).json(errorResponse);
  }
};

export const removeReview: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const removedReview = await db.removeReview({ id });

    if (removedReview) {
      const successResponse: SuccessResponse<any> = {
        status: "ok",
        payload: {
          item: removedReview,
        },
      };

      return res.status(200).json(successResponse);
    }

    throw new Error(`No found item with the id: ${id}`);
  } catch (error) {
    const errorResponse: ErrorResponse = {
      status: "error",
      msg: `An error occurred: ${error}`,
    };

    return res.status(400).json(errorResponse);
  }
};
