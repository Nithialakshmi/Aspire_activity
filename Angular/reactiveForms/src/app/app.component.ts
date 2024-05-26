// // src/app/app.component.ts
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   registrationForm: FormGroup;
//   messageClass: string;
//   message: string;

//   constructor(private fb: FormBuilder) {
//     this.registrationForm = this.fb.group({
//       fullName: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       employeeId: ['', Validators.required],
//       department: ['', Validators.required],
//       username: ['', Validators.required],
//       password: ['', [Validators.required, Validators.minLength(6)]],
//       confirmPassword: ['', Validators.required]
//     });
//   }

//   onSubmit() {
//     if (this.registrationForm.valid) {
//       this.messageClass = 'success';
//       this.message = 'Registration successful!';
//     } else {
//       this.messageClass = 'error';
//       this.message = 'Please fill in all fields correctly.';
//     }
//   }
// }

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registrationForm: FormGroup;
  messageClass: string = '';
  message: string = '';

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      employeeId: ['', Validators.required],
      department: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.messageClass = 'success';
      this.message = 'Registration successful!';
    } else {
      this.messageClass = 'error';
      this.message = 'Please fill in all fields correctly.';
    }
  }
}
