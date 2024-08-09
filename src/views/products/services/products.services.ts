import { api } from "@services";
import { IProduct, IProductForm } from "@products/types/products.types";
import type { BaseService, RequestConfig } from "@services";

export class ProductService {
  constructor(public api: BaseService) {}

  getProducts = (config?: RequestConfig) =>
    this.api.get<IProduct[]>("/products", config);

  deleteProduct = (id: number) => this.api.delete(`/products/${id}`);

  addProduct = (data: IProductForm, config?: RequestConfig) =>
    this.api.post<IProductForm, IProduct>("/products", data, config);
}

export const productService = new ProductService(api);
