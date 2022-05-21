import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../material/material.module';
import { StudentComponent } from './student/student.component';
import { ClassComponent } from './class/class.component';
import { CourseComponent } from './course/course.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    HomeComponent,
    StudentComponent,
    ClassComponent,
    CourseComponent,
    TestComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ],

})
export class HomeModule { }
