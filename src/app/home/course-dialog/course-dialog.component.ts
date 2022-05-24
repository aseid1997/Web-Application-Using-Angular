import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.scss']
})
export class CourseDialogComponent implements OnInit {

  courseForm!:  FormGroup;

  data: any;

  constructor(
    private formBuilder: FormBuilder,
    private courseApi: CourseService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<CourseDialogComponent>
  ) {}

  actionBtn: string = 'Save';
  ngOnInit(): void {
    this.courseForm = this.formBuilder.group({
      courseName: ['', Validators.required],
      courseCode: ['', Validators.required],
    });

    if (this.editData) {
      this.actionBtn = 'Update';
      this.courseForm.controls['courseName'].setValue(this.editData.courseName);
      this.courseForm.controls['courseCode'].setValue(this.editData.courseCode);
    }
  }

  addCourse() {
    if (!this.editData) {
      if (this.courseForm.valid) {
        this.courseApi.postCourse(this.courseForm.value).subscribe({
          next: (res) => {
            alert('Course added successfuly');
            this.courseForm.reset();
            this.dialogRef.close('save');
          },
          error: () => {
            alert('Error while adding the product ');
          },
        });
      }
    } else {
      this.updatecCourse();
    }
  }

  updatecCourse() {
    this.courseApi
      .putCourse(this.courseForm.value, this.editData.id)
      .subscribe({
        next: (res) => {
          alert('Course updated succesfully.');
          this.courseForm.reset();
          this.dialogRef.close('Update');
        },
        error: (err) => {
          alert('Course update unsuccesful!');
        },
      });
  }
}
