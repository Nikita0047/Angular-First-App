import { Component, inject,OnInit, signal ,} from '@angular/core';
import{ Todoservice } from '../services/todos';
import { Todo } from '../models/todos.type';
@Component({
  selector: 'app-todos',
  imports: [],
  template: `
   <!-- <p>
     {{ todoService.TodoItems[0].title }} Todo items loaded.if i do {{todoService.TodoItems}}it will show [object Object] 
    </p>
    <p>
      {{ TodoList()[0].title }}  displaying elements from TodoList -->
    @for(todo of TodoList(); track todo.id){
    <p>
      {{todo.title}}
    </p>
    }
  `,
  styles: ``,
})
export class Todos implements OnInit {
todoService = inject(Todoservice);
TodoList = signal<Array<Todo>>([]);
ngOnInit():void{
  console.log(this.todoService.TodoItems);
  this.TodoList.set(this.todoService.TodoItems);
}
}
