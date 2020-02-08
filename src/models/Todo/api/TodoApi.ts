// api service
import { TodoRepository } from '@/models/Todo/domain/repository/TodoRepository'

let todos = [];
export class TodoApi implements TodoRepository {
  public createNewTodo(todoName: string) {
    const todo = {
      id: Date.now(),
      isCompleted: false,
      name: todoName,
    }
    todos.push(todo);
    return Promise.resolve(todo)
  }

  public getTodos() {
    return Promise.resolve(todos);
  }

  public getCompletedTodos() {
    return Promise.resolve(todos.filter(todo => todo.isCompleted));
  }

  public deleteTodo(todoId: string) {
    todos = todos.filter(todo => todo.id !== todoId);
    return Promise.resolve();
  }

  public getTodoById(todoId: string) {
    return Promise.resolve(todos.find(todo => todo.id === todoId));
  }
}
