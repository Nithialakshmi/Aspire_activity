import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  isFormVisible: boolean = false;
  username: string = '';
  email: string = '';
  description: string = '';

  showForm() {
    this.isFormVisible = true;
  
    setTimeout(() => {
      const formElement = document.getElementById('form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  }

  onSubmit() {
   
    console.log('Form submitted:', {
      username: this.username,
      email: this.email,
      description: this.description
    });
  
    this.isFormVisible = false;
  }
}
