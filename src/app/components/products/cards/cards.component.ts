import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProductsComponent } from '../products.component';
import { Product } from '../Product';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule , ProductsComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
@Input() product! : Product; 
}
