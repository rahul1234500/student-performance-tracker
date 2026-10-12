import {
  Component,
  input,
  output,
  computed
} from '@angular/core';

import { Student } from '../models/Student';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [],
  templateUrl: './student-details.html',
  styleUrl: './student-details.css'
})
export class StudentDetails {

  // ONE selected student
  student = input.required<Student | null>();

  // Close event
  close = output<void>();

  // PASS / FAIL
  isPass = computed(() =>
    (this.student()?.marks ?? 0) >= 40
  );

  // Close details panel
  onClose() {
    this.close.emit();
  }
}