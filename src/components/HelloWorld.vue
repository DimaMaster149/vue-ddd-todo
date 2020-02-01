<template>
  <div class="hello">
    custom
    <template v-if="todos && todos.length > 0">
      <span v-for="todo in todos" :key="todo.id">
        <span>
          {{`id: ${todo.id}, name: ${todo.name}`}}
        </span>
      </span>
    </template>
    <input type="text" v-model="todoName">
    <button @click="addTodo()"> Create todo</button>
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
    this.todos = await this.todo.createNewTodo({
      id: Date.now(),
      isCompleted: false,
      name: this.todoName,
    });
  }
}
</script>
