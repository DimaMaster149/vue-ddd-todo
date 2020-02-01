// api service
import { TodoRepository } from '@/models/Todo/domain/repository/TodoRepository'

export class TodoApi implements TodoRepository {
  public createNewTodo(todo) {
    console.log(todo, 'create');
    return Promise.resolve(todo)
  }

  public getTodos() {
    return Promise.resolve([]);
  }

  public getCompletedTodos() {
    console.log('completed todos');
    return Promise.resolve([]);
  }

  public deleteTodo(todoId) {
    console.log(todoId, 'delete todo');
    return Promise.resolve([]);
  }

  public getTodoById(todoId) {
    console.log(todoId, 'getTodoById');
    return Promise.resolve({});
  }
}
