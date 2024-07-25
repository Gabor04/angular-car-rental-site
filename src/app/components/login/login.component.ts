import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService, private router: Router){
    // this.loginForm.valueChanges.subscribe((value) => console.log(value));
  }

  login(){
    if(this.loginForm.invalid) return;

    const {email, password} = this.loginForm.value;
    const users = this.authService.getUsers();
    const user = users.find(u => u.email===email && u.password===password);

    if(user){
      this.authService.login(user);
      localStorage.setItem('loggedInUser', JSON.stringify(user))
      this.router.navigate(['/home']);
    }
    else{
      alert('Invalid email or password!')
    }


  }


}
