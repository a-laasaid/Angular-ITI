// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule, NgForm } from '@angular/forms';
// import { Student } from './Studend';

// @Component({
//   selector: 'app-student',
//   standalone: true,
//   imports: [FormsModule, CommonModule],
//   templateUrl: './student.component.html',
//   styleUrl: './student.component.css'
// })
// export class StudentFormComponent {
//   newStudent: Student = { name: '', age: 0 };
//   students: Student[] = [];

//   addStudent(form: NgForm): void {
//     if (form.valid) {
//       this.students.push({ ...this.newStudent }); // Create a copy of newStudent object
//       this.newStudent.name = ''; // Reset the form fields after adding
//       this.newStudent.age = 0;
//     }
//   }
// }


/////////////////

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-student',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  students: { name: string, age: number }[] = [];
  studentName: string = '';
  studentAge: number = 0;

  addStudent() {
    // Check if both name and age are provided
    if (this.studentName.trim() && this.studentAge > 0) {
      // Check if age is less than 18
      if (this.studentAge < 18) {
        // Show message if age is less than 18
        alert('Age must be 18 or older.');
      } else {
        // Check for duplicates
        const isDuplicate = this.students.some(student => student.name === this.studentName && student.age === this.studentAge);
  
        if (!isDuplicate) {
          // Add student if not a duplicate
          this.students.push({ name: this.studentName, age: this.studentAge });
          // Reset input fields
          this.studentName = '';
          this.studentAge = 0;
        } else {
          // Show message if duplicate
          alert('This student is already in the list.');
        }
      }
    } else {
      // Show message if name or age is not provided
      alert('Name and age are required.');
    }
  }
  
  deleteStudent(student: any) {
    const index = this.students.indexOf(student);
    if (index !== -1) {
      this.students.splice(index, 1);
    }
  }
}