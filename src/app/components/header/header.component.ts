import { User } from './../../models/user.model';
import { RouterOutlet } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { Subscription } from 'rxjs';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgIf, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  isLoggedIn = false;
  userName = '';
  private userSubscription: Subscription = new Subscription();

  githubLinbk = "https://github.com/Gabor04";

  constructor(private authService: AuthService, private router: Router, private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
    this.userSubscription = this.authService.getUserObservable().subscribe(user => {
      console.log('User subscription update:', user);
      this.isLoggedIn = !!user;
      this.userName = user ? user.userName : '';
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe(); // Clean up subscription
  }

  goToRegister(){
    this.router.navigate(['/register']);
  }

  clearLoggedIn(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
