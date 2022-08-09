import express, { Request, Response } from "express";
import ProductsController from "../controllers/products.controller";

const productsRouter = express.Router();
const productsController = new ProductsController();

productsRouter.get("/", (_req: Request, res: Response) => {
  return res.json(productsController.getAllProducts());
});

productsRouter.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  return res.json(productsController.getProductById(id));
});

export default productsRouter;
