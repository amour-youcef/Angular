import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks : Array<Task> =[
    {
      title: '1',
      description: ''
    },
    {
      title: '2',
      description: ''
    }
  ]

  constructor() { }

  deleteTask(i){
    this.tasks.splice(i,1);
  }

  saveTask(title, description){
    this.tasks.push({
      title ,
      description: description
    })
  }
}
