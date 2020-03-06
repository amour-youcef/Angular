import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent  {

  @Input('my-num') myNumber;

  @Output('my-event') myEvent = new EventEmitter();

  constructor() { }
    
  onClick(){
     this.myEvent.emit(5);
   
  }

}
