// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule] // Import CommonModule and FormsModule
})
export class AppComponent {
  submitted = false;
  formData = {
    name: '',
    email: ''
  };

  onSubmit(form: NgForm) {
    this.submitted = true;
    this.formData.name = form.value.name;
    this.formData.email = form.value.email;
  }
}
