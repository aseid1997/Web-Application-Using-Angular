import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassComponent } from './class/class.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home.component';
import { StudentComponent } from './student/student.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
<<<<<<< HEAD
  {
    path: '', 
    children: [
      { path: 'student', component: StudentComponent },
      { path: 'class', component: ClassComponent },
      { path: 'course', component: CourseComponent },
      { path: 'test', component: TestComponent },

    ]
  }
=======
  { path: 'student', component: StudentComponent },
  { path: 'class', component: ClassComponent },
  { path: 'course', component: CourseComponent },
  { path: 'test', component: TestComponent },
>>>>>>> 2e843a7f14a7329270e6146712b8f692d39cec6a

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
