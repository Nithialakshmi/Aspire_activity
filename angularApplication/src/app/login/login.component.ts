import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }
  
  SetAuthentication() {
    console.log("UI SetAuthentication");
    this.userService.SetAuthenticate();
    //this.isAuthenticated = this.userService.checkAuthentication(); // Update the state after logout
   
  }
  login(): void {
    const { email, password } = this.loginForm.value;
    this.userService.login(email, password).subscribe(
      res => {
        const user = res.find((a: any) => a.email === email && a.password === password);
        if (user) {
        
          
          alert('Happy Shopping');
          this.SetAuthentication();
           

          this.loginForm.reset();
          this.router.navigate(['home']);
        } else {
          alert('User not found');
        }
      },
      err => {
        alert('Something went wrong!!');
      }
    );
  }
}

