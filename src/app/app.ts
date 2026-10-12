import { Component, signal } from '@angular/core';
import { StudentList } from './student-list/student-list';  
import { StudentDetails } from './student-details/student-details';
import { Student } from './models/Student';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  standalone: true,
  imports: [StudentList, StudentDetails],
  templateUrl: './app.html',
})
export class App {
   students = signal<Student[]>([
    { id: '1', rollNo: 'S001', name: 'Rahul Kale', course: 'Java Full Stack', marks: 82, addedOn: '23 Sep 2026', imgPath: 'assets/icons/student-img-6.jpg' },
    { id: '2', rollNo: 'S002', name: 'Priya Sharma', course: 'Angular', marks: 76, addedOn: '20 Sep 2026', imgPath: 'assets/icons/student-img-2.jpg' },
    { id: '3', rollNo: 'S003', name: 'Amita Verma', course: 'React', marks: 38, addedOn: '18 Sep 2026', imgPath: 'assets/icons/student-img-3.jpg' },
    { id: '4', rollNo: 'S004', name: 'Sahil Patil', course: 'Python', marks: 90, addedOn: '15 Sep 2026', imgPath: 'assets/icons/student-img-4.jpg' },
    { id: '5', rollNo: 'S005', name: 'Rohit Kumar', course: 'C++', marks: 28, addedOn: '12 Sep 2026', imgPath: 'assets/icons/student-img-5.jpg' },
    { id: '6', rollNo: 'S006', name: 'Sneha Gupta', course: 'Data Science', marks: 67, addedOn: '10 Sep 2026', imgPath: 'assets/icons/student-img-1.jpg' },
    { id: '7', rollNo: 'S007', name: 'Rohan Khante', course: 'Java Developer', marks: 82, addedOn: '30 Sep 2026', imgPath: 'assets/icons/student-img-6.jpg' },
    { id: '8', rollNo: 'S008', name: 'Priyanshu Sharma', course: 'Angular', marks: 30, addedOn: '21 Sep 2026', imgPath: 'assets/icons/student-img-2.jpg' },
    { id: '9', rollNo: 'S009', name: 'Amit Kumar', course: 'Sql', marks: 55, addedOn: '10 Sep 2026', imgPath: 'assets/icons/student-img-3.jpg' },
   ]);



   selectedStudent = signal<Student | null>(null);

   onStudentSelected(student: Student){
     this.selectedStudent.set(student);
   }

   onDeleteStudent(student: Student){
     this.students.update((list) => list.filter((s) => s.id !== student.id));
     if(this.selectedStudent()?.id === student.id){
       this.selectedStudent.set(null);
     }
   }

   onCloseDetails(){
    this.selectedStudent.set(null);
   }
}
