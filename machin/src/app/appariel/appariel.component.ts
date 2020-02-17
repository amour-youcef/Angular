import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appariel',
  templateUrl: './appariel.component.html',
  styleUrls: ['./appariel.component.css']
})
export class ApparielComponent implements OnInit {
  
  appareilName ='Machin a lave ';
  appareilStatus = 'eteint' ;

  constructor() { }

  ngOnInit(): void {
  }
 
  getStatus(){
    return this.appareilStatus;
  }
   
}
