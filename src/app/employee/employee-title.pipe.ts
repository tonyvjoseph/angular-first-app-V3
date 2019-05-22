import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'EmpTitle'
})

export class EmployeeTitle implements PipeTransform{
    //Here 'value' will get the value of the field were we placed this class.
    //If we call this method from 'name' property then name value will available here
    //But 'gender' value explicitly we have to pass
    transform(value, gender){
        
        return (gender.toLowerCase() == 'male' ? 'Mr. ' : 'Mrs. ') + value;

        // if(gender.toLowerCase()=='male'){
        //     return 'Mr.' + value;
        // }else{
        //     return 'Miss.' + value;
        // }
    }
}
