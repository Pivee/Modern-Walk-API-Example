import { Get, Route } from "tsoa";
import { IProduct } from "../interfaces/IProduct";
import products from "../mocks/products.json";
import { ProductsService } from "../services/products.service";

@Route("api/v1/products")
export default class ProductsController {
  productsDatasource;
  productsService;

  constructor() {
    this.productsDatasource = products;
    this.productsService = new ProductsService(this.productsDatasource);
  }

  @Get("/")
  public getAllProducts(): IProduct[] {
    return this.productsService.getAllProducts();
  }

  @Get("/:id")
  public getProductById(id: string): IProduct[] {
    return this.productsService.getProductById(id);
  }
}
