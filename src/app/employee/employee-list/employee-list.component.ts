import { Component, OnInit } from '@angular/core';
//// Interface
import { IEmployee } from '../employee';
//// Angular services
import{EmployeeService} from '../employee-service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  //// Register EmployeeService in this component by declaring it in the providers array
  //// we have to register our service with angular dependency injection system
  //// Here we have to provide our service class. We can register more than one service.
  providers: [EmployeeService]
})

export class EmployeeListComponent implements OnInit {

    //// Interface example
    employees4: IEmployee[];


    //// Angular services example
    //private _employeeService:EmployeeService;

    // constructor(_emplyoeeService:EmployeeService){
    //     this._employeeService=_emplyoeeService;
    // }
    employees5:IEmployee[];
    
    //// For error handling
    errorMessage:string='Loading data, please wait...';

    ////*ngFor structural directive with an example
    employees = [
        { code: '101', name: 'Tom', gender: 'Male' },
        { code: '102', name: 'Alex', gender: 'Male' },
        { code: '103', name: 'Mike', gender: 'Male' },
        { code: '104', name: 'Mary', gender: 'Female' },
    ];

    ////*ngFor trackBy with an example
    employees1: any[];
    employees2: any[];

    //// Angular services 
    //// _emplyoeeService used for angular service
    //// This is called dependency injection
    //// When an instance of employee-list-component is created, then angular dependency injection system
    //// will automaticaly inject an instance of EmployeeService into constructor.
    //// Inject EmployeeService using the constructor
    //// The private variable _employeeService which points to EmployeeService singelton instance 
    //// is then available throughout this class
    constructor(private _emplyoeeService:EmployeeService) { 
        
        //// Angular services 
        //this.employees5=this._emplyoeeService.getEmployees();

        ////*ngFor trackBy with an example
        this.employees1 = [
            { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '06/25/1988' },
            { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700.95, dateOfBirth: '9/6/1982' },
            { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '12/8/1979' },
            { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '10/14/1980' },
        ];

        //// Angular pipes "|" with an example
        this.employees2 = [
            { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '06/25/1988' },
            { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700.95, dateOfBirth: '9/6/1982' },
            { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '12/8/1979' },
            { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '10/14/1980' },
        ];

        //// Interface example
        this.employees4 = [
            { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '06/25/1988' },
            { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700.95, dateOfBirth: '9/6/1982' },
            { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '12/8/1979' },
            { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '10/14/1980' },
            { code: 'emp105', name: 'Nancy', gender: 'Female', annualSalary: 6700.826, dateOfBirth: '11/05/1982' },
            { code: 'emp106', name: 'John', gender: 'Male', annualSalary: 7000, dateOfBirth: '07/15/1979' },
        ];
    }

    //// ngOnInit will call after constructor only
    //// Mainly used for component initialisation and service calls
    ngOnInit() {
        //// Angular services 
        //this.employees5=this._emplyoeeService.getEmployees();
        
        //// We cant bind Observable of IEmployee(getEmployees() method) directly to the IEmployee array object 'employees5'
        //// An Observable can have many Observers (also called Subscribers).
        //// Following is the Observer/Subscriber
        this._emplyoeeService.getEmployees()
                            .subscribe(
                                employeeData=>this.employees5=employeeData,
                                error=>{
                                    this.errorMessage='Problem with the service. Please try again after sometime';
                                    console.error(error);

                                });

        //// Above we also specified call back method as a parametr to the subscribe method as a arrow function
        //// Here employeeData receives the employees list and assign to the employees5.

        
    }

    ////*ngFor trackBy with an example
    getEmployees1(){
        this.employees1 = [
            { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '06/25/1988' },
            { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700.95, dateOfBirth: '9/6/1982' },
            { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '12/8/1979' },
            { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '10/14/1980' },
            { code: 'emp105', name: 'Nancy', gender: 'Female', annualSalary: 6700.826, dateOfBirth: '11/05/1982' },
        ];
    }

    trackByEmpCode(index, employee){
        return employee.code;
    }

    ////Angular pipes "|" with an example
    getEmployees2(){
        this.employees2 = [
            { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '06/25/1988' },
            { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700.95, dateOfBirth: '9/6/1982' },
            { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '12/8/1979' },
            { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '10/14/1980' },
            { code: 'emp105', name: 'Nancy', gender: 'Female', annualSalary: 6700.826, dateOfBirth: '11/05/1982' },
        ];
    }

    //// Input property example
    //// Passing Data from nested to container component
    //// Component Input and Output properties
    //// Custom events using EventEmitter class
    employees3 = [
        { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '06/25/1988' },
        { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700.95, dateOfBirth: '9/6/1982' },
        { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '12/8/1979' },
        { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '10/14/1980' },
        { code: 'emp105', name: 'Nancy', gender: 'Female', annualSalary: 6700.826, dateOfBirth: '11/05/1982' },
        { code: 'emp106', name: 'John', gender: 'Male', annualSalary: 7000, dateOfBirth: '07/15/1979' },
    ];

    getTotalEmployeesCount(){
        return this.employees3.length;
    }

    getTotalMaleEmployeesCount(){
        return this.employees3.filter(e=>e.gender==="Male").length;
    }

    getTotalFemaleEmployeesCount(){
        return this.employees3.filter(e=>e.gender==="Female").length;
    }

    //// Output property example And Custom event example

    // This property keeps track of which radio button is selected
    // We have set the default value to All, so all the employees are displayed in the table by default
    selectedEmployeeCountRadioButton="All"

    // A Method to call, when the custom event(countRadioButtonSelectionChanged) inside the child component(Employee-count.component) is raised
    // The event binding is specified in employee-list.component.html
    // This is the Event handler method
    //onEmployeeCountRadioButtonChange(selectedRadioButtonValue:string):void{
    //OR
    onEmployeeCountRadioButtonChange(selectedRadioButtonValue){
        this.selectedEmployeeCountRadioButton=selectedRadioButtonValue;
        // This property(selectedEmployeeCountRadioButton) is then used along with *ngIf structural directive to decide which employee objects to display in the table.
    }

    //// Web API call testing
    getEmployeesCountFromWebAPI(){
        return this.employees5.length;
    }

    
    
}
