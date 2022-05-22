import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';

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
    private studentApi: StudentService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<StudentDialogComponent>
  ) {}
  actionBtn: string = 'Save';
  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      sex: ['', Validators.required],
      class: ['', Validators.required],
      section: ['', Validators.required],
      telephone: ['', Validators.required],
    });

    if (this.editData) {
      this.actionBtn = 'Update';
      this.studentForm.controls['firstName'].setValue(this.editData.firstName);
      this.studentForm.controls['lastName'].setValue(this.editData.lastName);
      this.studentForm.controls['sex'].setValue(this.editData.sex);
      this.studentForm.controls['class'].setValue(this.editData.class);
      this.studentForm.controls['section'].setValue(this.editData.section);
      this.studentForm.controls['telephone'].setValue(this.editData.telephone);
    }
  }

  addStudent() {
    if (!this.editData) {
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
    } else {
      this.updateStudent();
    }
  }

  updateStudent() {
    this.studentApi
      .putStudent(this.studentForm.value, this.editData.id)
      .subscribe({
        next: (res) => {
          alert('Student updated succesfully.');
          this.studentForm.reset();
          this.dialogRef.close('Update');
        },
        error: (err) => {
          alert('Student update unsuccesful!');
        },
      });
  }


}
