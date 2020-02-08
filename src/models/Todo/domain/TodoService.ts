// service
import { Todo } from '@/models/Todo'

export class TodoService {
  public todo: Todo | null = null;

  public async createTodo(): Promise<any> {
    if (!this.todo) {
      this.todo = await new Todo()
    }
    console.log(this.todo, 'this.todo')
    return this.todo;
  }
}
