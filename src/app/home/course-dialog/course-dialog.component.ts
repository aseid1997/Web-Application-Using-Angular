import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
<<<<<<< HEAD
import { ClassService } from 'src/app/services/class.service';
import { CourseService } from 'src/app/services/course.service';
import { ClassDialogComponent } from '../class-dialog/class-dialog.component';
=======
import { CourseService } from 'src/app/services/course.service';
>>>>>>> 2e843a7f14a7329270e6146712b8f692d39cec6a

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
<<<<<<< HEAD
      this.courseForm.controls['courseNumber'].setValue(this.editData.courseNumber);
=======
      this.courseForm.controls['courseName'].setValue(this.editData.courseName);
>>>>>>> 2e843a7f14a7329270e6146712b8f692d39cec6a
      this.courseForm.controls['courseCode'].setValue(this.editData.courseCode);
    }
  }

  addCourse() {
    if (!this.editData) {
      if (this.courseForm.valid) {
        this.courseApi.postCourse(this.courseForm.value).subscribe({
          next: (res) => {
<<<<<<< HEAD
            alert('course added successfuly');
=======
            alert('Course added successfuly');
>>>>>>> 2e843a7f14a7329270e6146712b8f692d39cec6a
            this.courseForm.reset();
            this.dialogRef.close('save');
          },
          error: () => {
            alert('Error while adding the product ');
          },
        });
      }
    } else {
<<<<<<< HEAD
      this.updateCourse();
    }
  }

  updateCourse() {
=======
      this.updatecCourse();
    }
  }

  updatecCourse() {
>>>>>>> 2e843a7f14a7329270e6146712b8f692d39cec6a
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
