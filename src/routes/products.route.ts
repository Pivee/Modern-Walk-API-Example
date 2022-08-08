import express, { Request, Response } from "express";
import { ProductsService } from "../services/products.service";
import products from "../mocks/products.json";

const productsRouter = express.Router();

const productsService = new ProductsService();

productsRouter.get("/", (req: Request, res: Response) => {
  res.json(productsService.getAllProducts(products));
});

productsRouter.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  res.json(productsService.getProductById(products, id));
});

export default productsRouter;
