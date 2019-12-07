import { Todo } from './../../server/src/todo/todo.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  getAllTodos(): Todo[]{
    return []
  }
}
