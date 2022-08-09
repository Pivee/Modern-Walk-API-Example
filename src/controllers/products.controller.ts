import { IProduct } from "../interfaces/IProduct";
import products from "../mocks/products.json";
import { ProductsService } from "../services/products.service";

export default class ProductsController {
  productsDatasource;
  productsService;

  constructor() {
    this.productsDatasource = products;
    this.productsService = new ProductsService(this.productsDatasource);
  }

  public getAllProducts(): IProduct[] {
    return this.productsService.getAllProducts();
  }

  public getProductById(id: string): IProduct[] {
    return this.productsService.getProductById(id);
  }
}
