import { Component, Input } from '@angular/core';
import { Todo } from '../todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent {

  @Input()
  public todoInput: Todo = {
    userId: 0,
    id: 0,
    title: '',
    completed: false
  };
  

}
