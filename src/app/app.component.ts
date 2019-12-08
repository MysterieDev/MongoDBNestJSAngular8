import { TodoService } from './todo.service';
import { Todo } from './../../server/src/todo/todo.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'NgNest';
  todos: Todo[] = [];

  constructor(private todoSvc: TodoService){}

  ngOnInit() {
     this.todoSvc.getAllTodos().subscribe(res => {
       this.todos = res
     })

  }
}
