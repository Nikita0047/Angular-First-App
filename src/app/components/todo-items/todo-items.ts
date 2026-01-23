import { Component, input, output } from '@angular/core';
import { Todo } from '../../models/todos.type';
import{ HighlightCompletedTodo } from '../../directives/highlight-completed-todo';
@Component({
  selector: 'app-todo-items',
  imports: [HighlightCompletedTodo],
  template: `
    
    <li 
    appHighlightCompletedTodo 
    [isCompleted]="todo().completed" 
    class="todo__item">

      <input
       id="todo-{{todo().id}}" 
       type="checkbox" 
       [checked]="todo().completed"
       (change)="this.todoClicked()"/>

        <label for="todo-{{todo().id}}">
          {{todo().title}}
       </label> 
   </li>
  `,
  styles: ``,
})
export class TodoItems {
 todo = input.required<Todo>();
 todoToggled = output<Todo>();

 todoClicked(){
   alert('Todo item clicked:'+ this.todo().title);
  this.todoToggled.emit(this.todo());
 }
}
