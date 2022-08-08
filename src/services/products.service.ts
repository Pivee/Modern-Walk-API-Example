import find from "../helpers/find.helper";
import { IProduct } from "../interfaces/IProduct";

export class ProductsService {
  getAllProducts(products: IProduct[]) {
    return find({ dataset: products });
  }

  getProductById(products: IProduct[], id: string) {
    return find<IProduct, number>({ dataset: products, key: "id", value: +id });
  }
}
