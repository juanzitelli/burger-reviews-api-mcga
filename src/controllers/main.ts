import { RequestHandler } from "express";

export const getRoot: RequestHandler = (req, res) => {
  res.json({
    msg: "Welcome to the Burger reviews API. Check out the official API docs: https://documenter.getpostman.com/view/18811843/UVR8o7dP",
    server: "all good, buddy 👍🏻",
  });
};
