export interface IEmployee {
    code: string;
    name: string;
    gender: string;
    annualSalary: number;
    dateOfBirth: string;
    // To make a property optional use a ?
    // A class that implements this interface need
    // not provide implementation for this property
    //department?: string;

    //computeMonthlySalary(annualSalary: number): number;
}

// export class Employee implements IEmployee {

//     constructor(public code: string, public name: string, public gender: string,
//         public annualSalary: number, public dateOfBirth: string) {
//     }

//      // Implementation of the interface method
//      computeMonthlySalary(annualSalary: number): number {
//         return annualSalary / 12;
//     }
// }