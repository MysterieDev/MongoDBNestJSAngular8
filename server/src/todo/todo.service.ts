import { CreateTodoDto } from './create-todo.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from './todo.interface';
import { Model } from 'mongoose';
@Injectable()
export class TodoService {
  constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const createdTodo = new this.todoModel(createTodoDto);
    return await createdTodo.save();
  }

  async findAll(): Promise<Todo[]> {
    return await this.todoModel.find().exec();
  }

  async findOne(name: string): Promise<Todo> {
    return await this.todoModel.findOne({ name: name }).exec();
  }

  async findByName(name: String): Promise<Todo[]> {
    return await this.todoModel.find({ name: name }).exec();
  }

  async findByStatus(finishedStatus: string): Promise<Todo[]> {
    let searchFinished: boolean;
    if(finishedStatus === 'finished') { searchFinished = true}
    else if(finishedStatus === 'unfinished') { searchFinished = false}
    else { return []}
    return await this.todoModel.find({ isFinished: searchFinished}).exec();
  }
}
