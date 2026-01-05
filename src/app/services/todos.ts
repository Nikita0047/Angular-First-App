import { Injectable } from '@angular/core';
import{ Todo } from '../models/todos.type';
@Injectable({
  providedIn: 'root',
})
export class Todoservice {
  TodoItems:Array<Todo>=[
    {
      id: 1,
      Userid: 1,
      title: 'Learn Angular', 
      completed: false 
    },
    {
      id: 2,
      Userid: 1,
      title: 'Lunch', 
      completed: true
    },
    {
      id: 3,
      Userid: 1,
      title: 'Exercise', 
      completed: false 
    },
    {
      id: 4,
      Userid: 1,
      title: 'groceries shopping', 
      completed: true 
    },
  ];

  constructor() {}
}
