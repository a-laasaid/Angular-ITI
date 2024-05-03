import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Iproduct } from '../../../models/iproduct';
import { ProductList } from '../../../models/ProductList';
import { ProductService } from '../../../services/prouduct.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit {
  Name: string = '';
  Price: number = 0;
  quantity: number = 0;

  productId: any;
  product: any;
  constructor(
    public productServices: ProductService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['ID'];
    if (this.productId != 0) {
      this.product = this.productServices.getProductById(this.productId);
      this.Name = this.product.Name;
      this.Price = this.product.Price;
      this.quantity = this.product.quantity;
    }
  }

  productHandler() {
    if (this.productId == 0) {
      let ID = ProductList.length + 1;
      let newProduct: Iproduct = {
        ID,
        Name: this.Name,
        Price: this.Price,
        quantity: this.quantity,
      };
      this.productServices.addNewProduct(newProduct);
      this.router.navigate(['/Products']);
    } else {
      //edit
      let updatedProduct: Iproduct = {
        ID: this.productId, // Ensure to include the ID of the product being updated
        Name: this.Name,
        Price: this.Price,
        quantity: this.quantity,
      };
      // Call the UpdateProduct function with productId and updated product
      this.productServices.UpdateProduct(this.productId, updatedProduct);
      this.router.navigate(['/Products']);
      this.router.navigate(['/Products']);
    }
  }
}

