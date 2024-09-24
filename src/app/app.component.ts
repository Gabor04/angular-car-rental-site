import { FirebaseApp } from './../../node_modules/@angular/fire/compat/firebase.app.d';
import { initializeApp } from 'firebase/app';
import { FirestoreModule } from '@angular/fire/firestore';
import { MatIconModule } from '@angular/material/icon';
import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NoticeComponent } from './components/notice/notice.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { FirebaseService } from './services/firebase.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    HeaderComponent, 
    NoticeComponent, 
    RegisterComponent, 
    LoginComponent, 
    HomeComponent, 
    CardModule,
    DropdownModule,
    MatIconModule,
    RouterModule,
    ReactiveFormsModule,
    UserprofileComponent,
   
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'carrent';

  constructor(private firebaseService: FirebaseService){}
}
