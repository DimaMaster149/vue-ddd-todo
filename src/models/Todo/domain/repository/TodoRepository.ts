// todo class interface
import { ITodo } from '@/models/ToDo'
// import { IUserTokenAndId } from '~/models/User/domain/IUserTokenAndId'

export interface TodoRepository {
  createNewTodo(todo: ITodo): Promise<ITodo>;
  getTodos(): Promise<ITodo[]>;
  getCompletedTodos(): Promise<ITodo[]>;
  deleteTodo(todoId: string): Promise<any>;
  getTodoById(todoId: string): Promise<ITodo>;
}
