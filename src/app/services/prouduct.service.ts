import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { ProductList } from '../models/ProductList';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Iproduct[] = [];
  constructor() {
    this.products = ProductList;
  }

  getAllProducts(): Iproduct[] {
    return this.products;
  }

  getProductById(productId: number): Iproduct | undefined {
    return this.products.find((product) => product.ID == productId);
  }

  addNewProduct(product: Iproduct) {
    this.products.push(product);

    return this.products;
  }

  deleteProduct(productId: number) {
    this.products = this.products.filter((product) => product.ID != productId);
    return this.products;
  }
  UpdateProduct(productId: number, product: Iproduct) {
    const index = this.products.findIndex(item=>item.ID==productId);
    console.log('old product',this.products[index]);
    console.log('new product',product);
    this.products[index].Name=product.Name;
    this.products[index].Price=product.Price;
    this.products[index].quantity=product.quantity;
    return this.products[index];

  }
}