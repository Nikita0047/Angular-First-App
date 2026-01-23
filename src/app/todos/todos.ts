import { Component, inject,OnInit, signal ,} from '@angular/core';
import{ Todoservice } from '../services/todos';
import { Todo } from '../models/todos.type';
import { catchError } from 'rxjs';
import { TodoItems } from '../components/todo-items/todo-items';

@Component({
  selector: 'app-todos',
  imports: [TodoItems],
  template: `
   <!-- <p>
     {{ todoService.TodoItems[0].title }} Todo items loaded.if i do {{todoService.TodoItems}}it will show [object Object] 
    </p>
    <p>
      {{ TodoList()[0].title }}  displaying elements from TodoList -->

      <h3>Todo List</h3>
        <!-- Structural directives 
         old way
         <p *ngIf="TodoList().length === 0">Loading....</p>
         -->
         <!--New way using control flow blocks. Note @if , @for these are control flow directives or block-->
        @if(!TodoList().length){
          <p>Loading....</p>
        } 
      <ul class="todo">
        @for(todo of TodoList(); track todo.id){
          <app-todo-items (todoToggled)="updateTodo($event)" [todo]="todo"></app-todo-items>
       }
      </ul>
   `,
  
  styles:
   `
    .todo{
      __item{
        display: flex;
        align-items: center;
        gap: 10px;
        
      }
    }`,
})
export class Todos implements OnInit {
todoService = inject(Todoservice);
TodoList = signal<Array<Todo>>([]);
ngOnInit():void{
  //console.log(this.todoService.TodoItems);
  //this.TodoList.set(this.todoService.TodoItems);
  this.todoService.getTodosfromAPI()
  .pipe(
    catchError((err)=>{
      console.log( err);

      throw err;
    }))
    .subscribe
      ( (todo) => 
        {
        this.TodoList.set(todo);
        }
      );
    }
    updateTodo(todoItem:Todo){
      alert('Todo item received from child component:');
     this.TodoList.update((todos)=>{
        return todos.map(todo=>{
          if(todo.id === todoItem.id){
            return {
              ...todo,
               completed: !todo.completed,
              };
          }
          return todo;
      });
    });
  }
}