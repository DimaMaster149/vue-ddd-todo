<template>
  <div class="hello">
    custom
    <template v-if="todo && todo.todos && todo.todos.length > 0">
      <span v-for="todo in todo.todos" :key="todo.id">
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
import { TodoService } from '@/models/Todo'
import { get } from '@/context/context'

@Component({ name: 'hello-world' })
export default class HelloWorld extends Vue {
  public todo: any;
  public todoName: string = '';

  @Inject() todoService!: TodoService;

  async created () {
    this.todo = await this.todoService.createTodo();
    console.log(this.todo, 'todod')
  }
  public async addTodo() {
    if (this.todoName.length === 0) {
      return;
    }
    await this.todo.createNewTodo(this.todoName);
  }

  public async removeTodo(id: string) {
    await this.todo.deleteTodo(id); 
  }
}
</script>

<style lang="scss">
.hello {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
</style>