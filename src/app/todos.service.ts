import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './todos/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}

  getTodos(id: number | null = null): Todo[] {
    var todos: Todo[] = [];
    if(id == null){
     this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos').subscribe(
      (data) => {
          data.forEach((todo) => {
            todos.push({id: todo.id, userId: todo.userId, title: todo.title, completed: todo.completed});
          });
          return data;
      },
      (error) => {
        console.error(error);
      }
    );
  }else{
    this.http.get<Todo>('https://jsonplaceholder.typicode.com/todos/'+id).subscribe(
      (data) => {
          todos.push({id: data.id, userId: data.userId, title: data.title, completed: data.completed});
          return data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  return todos;
}
}
