import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';
import { ShopComponent } from './shop/shop.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StudentComponent,FormsModule,ShopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myAngularApp';
  
}
