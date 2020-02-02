<template>
  <div class="hello">
    custom
    <template v-if="todos && todos.length > 0">
      <span v-for="todo in todos" :key="todo.id">
        <span style="cursor: pointer;" @click="removeTodo(todo.id)">
          {{`id: ${todo.id}, name: ${todo.name}`}}
        </span>
      </span>
    </template>
    <div>
      <input type="text" v-model="todoName">
      <button @click="addTodo($event)"> Create todo</button>
    </div>
    
  </div>
</template>

<script lang="ts">
import { Component, Inject, Prop, Vue } from 'vue-property-decorator';
// import { TodoService } from '@/models/Todo'
import { get } from '@/context/context'

@Component
export default class HelloWorld extends Vue {
  public todo: any;
  public todoName: string = '';
  public todos: Array = [];

  @Inject() todoService!: TodoService;

  async created () {
    this.todo = await this.todoService.createTodo();
    this.todos = await this.todo.getTodos();
  }
  public async addTodo() {
    if (this.todoName.length === 0) {
      return;
    }
    await this.todo.createNewTodo({
      id: Date.now(),
      isCompleted: false,
      name: this.todoName,
    });
  }

  public async removeTodo(id) {
    await this.todo.deleteTodo(id); 
  }

  // get todos () {
  //   if (this.todo) {
  //     return this.todo.getTodos();
  //   } return [];
  // }
}
</script>

<style lang="scss">
.hello {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
</style>