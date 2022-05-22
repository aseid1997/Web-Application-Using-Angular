import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http:HttpClient) { }

  postClass( data:any){
    return this.http.post<any>("http://localhost:3000/class/",data)
  }
  putClass( data:any, id:number){
    return this.http.put<any>("http://localhost:3000/class/"+id,data)
  }

  getClass(){
    return this.http.get<any>("http://localhost:3000/class/");
  }

  deleteClass(id:number){
    return this.http.delete<any>("http://localhost:3000/class/"+id);
  }}
