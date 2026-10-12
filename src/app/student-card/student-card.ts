import {
  Component,
  input,
  output,
  computed
} from '@angular/core';

import { Student } from '../models/Student';

@Component({
  selector: 'app-student-card',
  standalone: true,
  imports: [],
  templateUrl: './student-card.html',
  styleUrl: './student-card.css'
})
export class StudentCard {

  student = input.required<Student>();

  viewDetails = output<Student>();

  deleteStudent = output<Student>();

  isPass = computed(() =>
    this.student().marks >= 40
  );

  onView() {
    console.log('View clicked:', this.student());

    this.viewDetails.emit(this.student());
  }

  onDelete() {
    this.deleteStudent.emit(this.student());
  }
}