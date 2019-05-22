//// Import the Life Cycle Hook interface like OnInit,  OnChanges, SimpleChanges
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})

export class OthersComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit() {
  }

  ////Angular component lifecycle hooks | ngOnChanges, ngOnInit and ngOnDestroy
  @Input()
  InputValue:string;

  currentVal:string;
  previousVal:string;

  //// Each interface has a single hook method whose name is the interface name prefixed with ng.
  //// The "ngOnChanges" hook method receives a "SimpleChanges" object containing current and previous property values. 

  ngOnChanges(changes:SimpleChanges){
    for(let propertyName in changes){
      let change=changes[propertyName];
      let currentValue=JSON.stringify(change.currentValue);
      let previousValue=JSON.stringify(change.previousValue);

      this.currentVal=currentValue;
      this.previousVal=previousValue;

      console.log('CurrentValue: '+currentValue+', PreviousValue: '+ previousValue);
    }
  }
}


