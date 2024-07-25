import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-userprofile',
  standalone: true,
  imports: [],
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.css'
})
export class UserprofileComponent {

  constructor(private authService: AuthService){}

  user = this.authService.getLoggedInUser()
  username = this.user?.userName;
  emailaddress = this.user?.email;

}
