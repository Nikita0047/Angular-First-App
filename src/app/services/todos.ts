import { Injectable, inject } from '@angular/core';
import{ Todo } from '../models/todos.type';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class Todoservice {
  http = inject(HttpClient);
  
  getTodosfromAPI() {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<Todo>>(url);
  }
}
