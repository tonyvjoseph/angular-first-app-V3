import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
//// Import HttpClient to issue any HTTP request using the builtin http service 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


//// Since this Angular EmployeeService class has an injected dependency(on HttpClient), @Injectable() decorator is required on this class. 
//// If there are no injectable dependencies then we may omit the @Injectable() decorator
@Injectable()
export class EmployeeService {
    
    //// Use the EmployeeService class constructor to inject Angular Http service(HttpClient). 
    //// The injected HttpClient service can then be used anywhere in this class to call a web service over http. 
    //// Below code will create a contructor and a private variable at same time
    constructor(private _httpClient:HttpClient){}

    //// Http get() method return Observable<Response>.
    //// So, we have to set the return type of getEmployees() method to Observable<IEmployee[]> 
    getEmployees(): Observable<IEmployee[]>{
        // return [
        //     { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '06/25/1988' },
        //     { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700.95, dateOfBirth: '9/6/1982' },
        //     { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '12/8/1979' },
        //     { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '10/14/1980' },
        //     { code: 'emp105', name: 'Nancy', gender: 'Female', annualSalary: 6700.826, dateOfBirth: '11/05/1982' },
        //     { code: 'emp106', name: 'John', gender: 'Male', annualSalary: 7000, dateOfBirth: '07/15/1979' },
        // ];

        //// Converting the service response to IEmployee array.
        return this._httpClient.get<IEmployee[]>("http://localhost:50101/api/employee/GetEmployeeListAA")
                                .pipe(
                                    catchError(this.handleError)
                                );

    }

    handleError(errorResponse:Response){
        console.error(errorResponse);
        return Observable.throw(errorResponse);
    }
}
