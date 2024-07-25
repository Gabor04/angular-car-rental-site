import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CarsComponent } from './cars/cars.component';
import { Car } from '../../models/car.model';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CarsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(){}

}
