import { Component, OnInit } from '@angular/core';
import { Good } from '../interfaces/good.interfaces';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.scss']
})
export class Home1Component implements OnInit {
  goods: Good[] = [
    {
      name:'apple', price: 5, photoUrl:'assets/photo01.jpg'
    },
    {
     name:'apple', price: 5, photoUrl:'assets/photo01.jpg'
   },
   {
     name:'apple', price: 5, photoUrl:'assets/photo01.jpg'
   },
   {
     name:'apple', price: 5, photoUrl:'assets/photo01.jpg'
   }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
