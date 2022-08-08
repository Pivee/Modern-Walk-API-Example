import express, { Request, Response } from "express";

const productsRouter = express.Router();

productsRouter.get("/", (req: Request, res: Response) => {
  res.send("Find all products");
});

export default productsRouter;
