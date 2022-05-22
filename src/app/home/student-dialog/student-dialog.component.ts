import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import {MatDialogRef}from '@angular/material/dialog'

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.scss'],
})
export class StudentDialogComponent implements OnInit {
  studentForm!: FormGroup;
  data: any;
  constructor(
    private formBuilder: FormBuilder,
    private studentApi: StudentService, private dialogRef:MatDialogRef<StudentDialogComponent>
  ) {}

  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      sex: ['', Validators.required],
      class: ['', Validators.required],
      section: ['', Validators.required],
      telephone: ['', Validators.required],
    });
  }
  addStudent() {
    if (this.studentForm.valid) {
      this.studentApi.postStudent(this.studentForm.value).subscribe({
        next: (res) => {
          alert('Student added successfuly');
          this.studentForm.reset();
          this.dialogRef.close('save');
        },
        error: () => {
          alert('Error while adding the product ');
        },
      });
    }
  }
}
