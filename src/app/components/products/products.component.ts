import { Component } from '@angular/core';
import { CardsComponent } from './cards/cards.component';
import { CommonModule } from '@angular/common';
import { Product } from './Product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardsComponent , CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products : Product[];

  constructor() {
    this.products=[ 
      {
        id: 1,
        name: "Al Deira Dahab Hotel",
        price: 300,
        detalis: "Boasting a garden, terrace and views of city, Al Deira Dahab Hotel is set in Dahab.",
        image: "assets/imgs/4.jpg",
        quantity:0
      },
      {
        id: 2,
        name: "TK Suites",
        price: 400,
        detalis: "An aparthotel nestled in the centre of Hurghada,  an infinity pool and garden.",
        image: "assets/imgs/8.jpg",
        quantity:1
      },
      {
        id: 3,
        name: "Club Red Dahab MotelOpens",
        price: 500,
        detalis: "Located close to the public Mashraba beach in Dahab.",
        image: "assets/imgs/6.jpg",
        quantity:0
      },
      {
        id: 4,
        name: "Juliana Beach Hurghada",
        price: 350,
        detalis: "Situated in Hurghada, Juliana Beach Hurghada features accommodation with a terrace.",
        image: "assets/imgs/7.jpg",
        quantity:1
      }
      
    ]
  }


}
