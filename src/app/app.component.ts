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

  ngOnInit(): void {
        
  }
}
