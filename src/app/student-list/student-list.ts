  import { Component, input, output, signal, computed } from '@angular/core';
  import { StudentCard } from '../student-card/student-card';
  import { Student } from '../models/Student';



  @Component({
    imports: [StudentCard],
    standalone: true,
    selector: 'app-student-list',
    styleUrl: './student-list.css',
    templateUrl: './student-list.html',
  })
  export class StudentList {
    students = input.required<Student[]>();
    studentSelected = output<Student>();
    deleteStudent = output<Student>();

    searchTerm = signal('');
    filteredStudents = computed(() => {
       const term = this.searchTerm().toLowerCase().trim();
       if(!term) return this.students();
       return this.students().filter((s) => s.name.toLowerCase().includes(term) || s.course.toLowerCase().includes(term) || s.rollNo.toLowerCase().includes(term));
    });

    onSearchChange(value : string){
      this.searchTerm.set(value);
    }

    onView(student: Student){
      this.studentSelected.emit(student);
    }

    onDelete(student: Student){
      this.deleteStudent.emit(student);
    }
  }
