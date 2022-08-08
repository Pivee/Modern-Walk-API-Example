import express, { Request, Response } from "express";
import { ProductsService } from "../services/products.service";
import products from "../mocks/products.json";

const productsRouter = express.Router();

const productsDatasource = products;

const productsService = new ProductsService(productsDatasource);

productsRouter.get("/", (req: Request, res: Response) => {
  res.json(productsService.getAllProducts());
});

productsRouter.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  res.json(productsService.getProductById(id));
});

export default productsRouter;
