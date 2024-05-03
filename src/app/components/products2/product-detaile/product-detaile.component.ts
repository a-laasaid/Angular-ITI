import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/prouduct.service';
import { Iproduct } from '../../../models/iproduct';

@Component({
  selector: 'app-product-detaile',
  standalone: true,
  imports: [],
  templateUrl: './product-detaile.component.html',
  styleUrl: './product-detaile.component.css'
})
export class ProductDetaileComponent implements OnInit {
  productID: any;
  product?: Iproduct;
  constructor(
    public activatedRoute: ActivatedRoute,
    public productServices: ProductService,
    public router: Router
  ) {}
  ngOnInit(): void {
    this.productID = this.activatedRoute.snapshot.params['ID'];
    this.product = this.productServices.getProductById(this.productID);
    console.log(this.product);
  }

  back() {
    this.router.navigate(['/Products']);
  }
}