import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  postStudent( data:any){
    return this.http.post<any>("http://localhost:3000/student/",data)
  }
  putStudent( data:any, id:number){
    return this.http.put<any>("http://localhost:3000/student/"+id,data)
  }

  getStudent(){
    return this.http.get<any>("http://localhost:3000/student/");
  }

  deleteStudent(id:number){
    return this.http.delete<any>("http://localhost:3000/student/"+id);
  }

}
