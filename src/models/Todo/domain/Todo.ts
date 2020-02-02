// todo class
import Vue from 'vue';
import { get } from '@/context/context'
import { ITodo, TodoRepository } from '@/models/Todo'

export class Todo {
  public TodoRepository: TodoRepository = get('todoRepository');
  public todos: ITodo[] | null = null;

  public async createNewTodo(todo: any) {
    const data = await this.TodoRepository.createNewTodo(todo);
    this.todos!.push(data);
  }

  public async getTodos() {
    this.todos = await this.TodoRepository.getTodos();
    return this.todos;
  }

  public getCompletedTodos() {
    return this.todos!.filter(todo => todo.isCompleted);
  }

  public async deleteTodo(todoId) {
    await this.TodoRepository.deleteTodo(todoId);
    const index = this.todos!.findIndex(todo => todo.id === todoId);
    Vue.delete(this.todos, index);
    // this.todos = this.todos!.filter(todo => todo.id !== todoId);
    return this.todos;
  }

  public async getTodoById(todoId) {
    await this.TodoRepository.getTodoById(todoId);
    return this.todos!.find(todo => todo.id === todoId);
  }
}