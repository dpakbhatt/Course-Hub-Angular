import { HomeServiceService } from './../home-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  student;
  selectedStudent;
  count = 0;
  public students = [];

  constructor(private homeService: HomeServiceService) { }

  ngOnInit(): void {
    this.students = this.homeService.getStudent();
  }

  public selectStudent(student){
    this.count++;
    if(this.count % 2 == 1){
      return this.selectedStudent = student;
    }else if (this.selectedStudent.id != student.id){
      this.count++;
      return this.selectedStudent = student;
    }else {
      return this.selectedStudent = !this.selectedStudent;
    }
  }

  public onDelete(id){
    let item = this.students.findIndex(function(student){
      return student.id === id;
    });
    if(item !== -1){
      this.students.splice(item, 1);
    }
    if(this.selectedStudent.id === id){
      this.selectedStudent = !this.selectedStudent;
    }
  }

}
