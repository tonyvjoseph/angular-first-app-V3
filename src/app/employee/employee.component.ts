import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  
  colSpan=2;

  firstName = 'Tom';
  lastName = 'Hopkins';
  gender = 'Male';
  age = 25;

  //Event Binding
  showDetails=false;

  toggleDetails(){
    this.showDetails=!this.showDetails;

  }
  
  //Two way Event Binding
  name='Tom';



  constructor() { }

  ngOnInit() {
  }

  
}
