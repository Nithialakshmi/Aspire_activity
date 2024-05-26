import { Component } from '@angular/core';


@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
 
  studentName:String="Narmatha";
  studentMark:number=450;
  joinDate:Date=new Date();

  messageVisible: boolean = false;

  showMessage() {
    this.messageVisible = true;
  }

}
