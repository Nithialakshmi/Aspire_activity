import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { Router,RouterLink } from '@angular/router';
import { UserService } from './user.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,HomeComponent,ProductComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angularApplication';

  isAuthenticated = false; 

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    console.log("App Test-onInit");
    this.userService.authenticationStatus.subscribe(isAuth => {
      this.isAuthenticated = isAuth;
    });
  }

  logout() {
    alert("Happy Shopping See you Next Time");
    this.userService.logout();
   
  }
  Signin()
  {
    console.log("Method Detected");
  }
}








