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

@NgModule({
  declarations: [
    HomeComponent,
    StudentComponent,
    ClassComponent,
    CourseComponent,
    TestComponent,
    StudentDialogComponent,
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
