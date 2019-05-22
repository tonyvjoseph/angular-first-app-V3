import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  all;

  @Input()
  male;

  @Input()
  female;

  //// Output property example And Custom event example

  // Holds the selected value of the radio button
   selectedRadioButtonValue = 'All';
  
  // The Output decorator makes the property an Output property
  // EventEmitter class is used to create the custom event
  // When the radio button selection changes, the selected
  // radio button value which is a string gets passed to the
  // event handler method. Hence, the event payload is string.
  // This is the custom event
   @Output()
   countRadioButtonSelectionChanged: EventEmitter<string>= new EventEmitter<string>();   
  
  // This method raises the custom event(countRadioButtonSelectionChanged). 
  // We will bind this method to the change event of all the 3 radio buttons
   onRadioButtonSelectionChange(){
     this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
     console.log(this.selectedRadioButtonValue);
   }

}
