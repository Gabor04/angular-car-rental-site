import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private localStorageKey = 'registeredUsers';
  private loggedInUserKey = 'loggedInUser';

  private userSubject = new BehaviorSubject<User | null>(this.getLoggedInUser());

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router:Router) { }

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  registerUser(user: User): void{
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem(this.localStorageKey, JSON.stringify(users));
  }

  getUsers(): User[] {
    if (this.isBrowser()) {
      const users = localStorage.getItem(this.localStorageKey);
      return users ? JSON.parse(users) : [];
    }
    return [];
  }

  getLoggedInUser(): User | null {
    if (this.isBrowser()) {
      const user = localStorage.getItem(this.loggedInUserKey);
      return user ? JSON.parse(user) : null;
    }
    return null;
  }
  login(user: User): void {
    if (this.isBrowser()) {
      localStorage.setItem(this.loggedInUserKey, JSON.stringify(user));
      this.userSubject.next(user);
    }
  }

  isLoggedIn(): boolean {
    return !!this.getLoggedInUser();
  }

  logout(): void{
    if (this.isBrowser()) {
      localStorage.removeItem(this.loggedInUserKey);
      this.userSubject.next(null);
    }
  }

  getUserObservable() {
    return this.userSubject.asObservable();
  }
}
