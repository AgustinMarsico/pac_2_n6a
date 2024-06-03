import { Component } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from './todo.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent {
  todos: Todo[] = [];
  idSearch: string = '';
  
  constructor(private todosService: TodosService) {
    this.todos = this.getTodos();
  }
  
  
  randomMethod() {
    console.log('Random method');
    this.todos = this.getTodos();
  }

  getTodos(): Todo[] {
    if (this.idSearch) {
      console.log('Searching by id:', this.idSearch);
      return this.todosService.getTodos(parseInt(this.idSearch));
    }
    return this.todosService.getTodos();
  }
}
