import { Todo } from './../../server/src/todo/todo.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private readonly http: HttpClient){}

  getAllTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>('http://localhost:4200/api/todo');
  }
}
