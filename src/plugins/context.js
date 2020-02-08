import Vue from 'vue'
import { contextMixin, registry } from '@/context/context'

import { TodoService, TodoApi } from '@/models/Todo'

registry(TodoService, 'todoService')

registry(TodoApi, 'todoRepository')

// Vue.mixin(contextMixin);
export default contextMixin;