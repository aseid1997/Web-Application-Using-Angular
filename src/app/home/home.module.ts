import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../material/material.module';
import { StudentComponent } from './student/student.component';
import { ClassComponent } from './class/class.component';
import { CourseComponent } from './course/course.component';
import { TestComponent } from './test/test.component';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { ClassDialogComponent } from './class-dialog/class-dialog.component';
import { TestDialogComponent } from './test-dialog/test-dialog.component';

@NgModule({
  declarations: [
    HomeComponent,
    StudentComponent,
    ClassComponent,
    CourseComponent,
    TestComponent,
    StudentDialogComponent,
    CourseDialogComponent,
    ClassDialogComponent,
    TestDialogComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
})
export class HomeModule {}
