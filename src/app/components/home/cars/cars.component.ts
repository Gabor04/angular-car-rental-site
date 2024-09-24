
import { Car } from './../../../models/car.model';
import { User } from '../../../models/user.model';
import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import internal from 'node:stream';
import { NgOptimizedImage } from '@angular/common';
import { provideImgixLoader } from '@angular/common';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CardModule, ButtonModule, CommonModule, NgOptimizedImage],
  providers: [provideImgixLoader('http://www.imgix.com/'),],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent implements AfterViewInit {
 
  cars: Car[] =[

    {
      id: 1,
      brand: 'BMW',
      model: 'E36',
      year: 2000,
      color: 'black',
      rentalPricePerDay: 30,
      isAvailable: true,
      imgSrc: '/assets/5d_m1330.jpg'
    },
    
    {
      id: 2,
      brand: 'Audi',
      model: 'A4',
      year: 2015,
      color: 'black',
      rentalPricePerDay: 40,
      isAvailable: true,
      imgSrc: '/assets/20001583_1.jpg'
    },
    
    {
      id: 3,
      brand: 'Mercedes',
      model: 'C-Class',
      year: 2018,
      color: 'black',
      rentalPricePerDay: 50,
      isAvailable: false,
      imgSrc: '/assets/class.jpg'
    },
   
    {
      id: 4,
      brand: 'Toyota',
      model: 'Camry',
      year: 2020,
      color: 'white',
      rentalPricePerDay: 35,
      isAvailable: true,
      imgSrc: '/assets/camry.jpg'
    },
    
    {
      id: 5,
      brand: 'Ford',
      model: 'Mustang',
      year: 2017,
      color: 'white',
      rentalPricePerDay: 60,
      isAvailable: true,
      imgSrc: '/assets/mustang.jpg'
    },
    
    {
      id: 6,
      brand: 'Chevrolet',
      model: 'Impala',
      year: 2019,
      color: 'gray',
      rentalPricePerDay: 45,
      isAvailable: false,
      imgSrc: '/assets/impala.jpg'
    },
    
    {
      id: 7,
      brand: 'Honda',
      model: 'Civic',
      year: 2016,
      color: 'black',
      rentalPricePerDay: 25,
      isAvailable: true,
      imgSrc: '/assets/civic.jpg'
    },
   

  ];

  @ViewChildren('dynamicButton') dynamicButtons!: QueryList<ElementRef>;
  
  ngAfterViewInit(): void {
    
    this.dynamicButtons.forEach((buttonElement: ElementRef) => {
      console.log(buttonElement.nativeElement);
    });}

  

  rentCar(carId: any){

    let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}')

    if (!loggedInUser.rentedCars) {
      loggedInUser.rentedCars = [];
    }
    if(!loggedInUser.rentedCars.includes(carId)){
      loggedInUser.rentedCars.push(carId);
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser)); 
    }
    else{
      console.log('fasz');
      carId = 0;
    }

       
      
      
      
    

    
  }
}

