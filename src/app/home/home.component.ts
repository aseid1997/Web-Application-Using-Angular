import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClassDialogComponent } from './class-dialog/class-dialog.component';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openStudentDialog() {
    this.dialog.open(StudentDialogComponent, {
      width: '50%',
    });
  }
  openClassDialog() {
    this.dialog.open(ClassDialogComponent, {
      width: '50%',
    });
  }

  ngOnInit(): void {}
}
