import { Component, inject,OnInit, signal ,} from '@angular/core';
import{ Todoservice } from '../services/todos';
import { Todo } from '../models/todos.type';
import { catchError } from 'rxjs';
@Component({
  selector: 'app-todos',
  imports: [],
  template: `
   <!-- <p>
     {{ todoService.TodoItems[0].title }} Todo items loaded.if i do {{todoService.TodoItems}}it will show [object Object] 
    </p>
    <p>
      {{ TodoList()[0].title }}  displaying elements from TodoList -->

      <h3>Todo List</h3>
      <ul class="todo">
        @for(todo of TodoList(); track todo.id){
          <li class="todo__item">
            <input id="todo-{{todo.id}}" type="checkbox" [value]="todo.completed"/>
              <label for="todo-{{todo.id}}">
              {{todo.title}}
              </label> 
          </li>
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
}
