import express, { Request, Response } from "express";

const categoriesRouter = express.Router();

categoriesRouter.get("/", (req: Request, res: Response) => {
  res.send("Find all categories");
});

export default categoriesRouter;
