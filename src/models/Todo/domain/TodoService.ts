// service
import { Todo } from '@/models/Todo'

export class TodoService {
  public async createTodo(): Promise<any> {
    const todo = await new Todo()
    return todo;
  }
}
