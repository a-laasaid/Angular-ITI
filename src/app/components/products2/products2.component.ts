import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/prouduct.service';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products2',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products2.component.html',
  styleUrl: './products2.component.css',
})
export class Products2Component implements OnInit {
  products: Iproduct[];
  constructor(public productService: ProductService) {
    this.products = [];
  }
  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

  deleteHandler(productID: number) {
    this.products = this.productService.deleteProduct(productID);
  }
}
