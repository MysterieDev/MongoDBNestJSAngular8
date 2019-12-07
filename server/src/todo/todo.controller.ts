import { CreateTodoDto } from './create-todo.dto';
import { TodoService } from './todo.service';
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Todo } from './todo.interface';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoSvc: TodoService) {}

  @Get()
  async getAllTodos(): Promise<Todo[]> {
    return this.todoSvc.findAll();
  }

  @Get(['one/:name'])
  async getOneTodo(@Param('name') name: string): Promise<Todo> {
    return this.todoSvc.findOne(name);
  }

  @Get(':name')
  async getTodosByName(@Param('name') name: string): Promise<Todo[]> {
    return this.todoSvc.findByName(name);
  }

  @Get('status/:finished')
  async getUnfinishedTodos(@Param('finished') finished: string): Promise<Todo[]>{
    return this.todoSvc.findByStatus(finished);
  }

  @Post()
  async addtodo(@Body() createTodoDto: CreateTodoDto) {
    await this.todoSvc.create(createTodoDto);
  }
}
