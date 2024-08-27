import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public registrationForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      email: [''],
      username: [''],
      password: [''],
      mobileNumber: ['']
    });
  }

  signUp(): void {
    const { username, email, password, mobileNumber } = this.registrationForm.value;
    this.userService.signup(username, email, password, mobileNumber).subscribe(
      res => {
        alert('Signup Successfully');
        this.registrationForm.reset();
        this.router.navigate(['login']);
      },
      err => {
        alert('Something went wrong');
      }
    );
  }
}

