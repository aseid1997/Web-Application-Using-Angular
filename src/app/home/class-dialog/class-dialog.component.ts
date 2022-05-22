import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClassService } from 'src/app/services/class.service';

@Component({
  selector: 'app-class-dialog',
  templateUrl: './class-dialog.component.html',
  styleUrls: ['./class-dialog.component.scss']
})
export class ClassDialogComponent implements OnInit {

  classForm!:  FormGroup;

  data: any;

  constructor(
    private formBuilder: FormBuilder,
    private classApi: ClassService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<ClassDialogComponent>
  ) {}

  actionBtn: string = 'Save';
  ngOnInit(): void {
    this.classForm = this.formBuilder.group({
      classNumber: ['', Validators.required],
      section: ['', Validators.required],
    });

    if (this.editData) {
      this.actionBtn = 'Update';
      this.classForm.controls['classNumber'].setValue(this.editData.classNumber);
      this.classForm.controls['section'].setValue(this.editData.section);
    }
  }

  addClass() {
    if (!this.editData) {
      if (this.classForm.valid) {
        this.classApi.postClass(this.classForm.value).subscribe({
          next: (res) => {
            alert('class added successfuly');
            this.classForm.reset();
            this.dialogRef.close('save');
          },
          error: () => {
            alert('Error while adding the product ');
          },
        });
      }
    } else {
      this.updateclass();
    }
  }

  updateclass() {
    this.classApi
      .putClass(this.classForm.value, this.editData.id)
      .subscribe({
        next: (res) => {
          alert('class updated succesfully.');
          this.classForm.reset();
          this.dialogRef.close('Update');
        },
        error: (err) => {
          alert('class update unsuccesful!');
        },
      });
  }

}
