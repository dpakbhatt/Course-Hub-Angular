import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  students = [
    {id: 101, name: "Alex", description: "Alex Details", email: "alex@gmail.com"},
    {id: 102, name: "Alena", description: "Alena Details", email: "alena@gmail.com"},
    {id: 103, name: "Sara", description: "Sara Details", email: "sara@gmail.com"},
    {id: 104, name: "Jon", description: "Jon Details", email: "jon@gmail.com"},
    {id: 105, name: "Roger", description: "Roger Details", email: "roger@gmail.com"}
  ]

  constructor() { }

  public getStudent(): Array<{id, name, description, email}>{
    return this.students;
  }

  public createStudent(student: {id, name, description, email}){
    this.students.push(student);
  }
  
}
