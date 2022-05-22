import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }

  postCourse( data:any){
    return this.http.post<any>("http://localhost:3000/course/",data)
  }
  putCourse( data:any, id:number){
    return this.http.put<any>("http://localhost:3000/course/"+id,data)
  }

  getCourse(){
    return this.http.get<any>("http://localhost:3000/course/");
  }

  deleteCourse(id:number){
    return this.http.delete<any>("http://localhost:3000/course/"+id);
  }
}
