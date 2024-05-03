import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { StudentComponent } from './components/student/student.component';
import { TracksITIComponent } from './components/tracks-iti/tracks-iti.component';


@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet ,NavbarComponent , SliderComponent ,ProductsComponent , StudentComponent , TracksITIComponent ,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
