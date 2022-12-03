<template>
   <h1>Lista de Tarefas</h1>

   <ul>
      <li v-for="todo in todosView" :key="todo.identify">

         {{ todo.name }}
      </li>
   </ul>

</template>


<script>
import { onMounted, ref} from 'vue';

import TodoService from '@/sevices/todos.service'

/* import { response } from 'express'; */

export default {
   name: "TodosView",
   setup(){
const todos = ref([]);

      onMounted(() => {
         TodoService.getAll()
                  .then(response => todos.value = response.data.data )
                  .catch(error => console.log(error))
      })

      return {
         todos,
      }
   
   }
}
</script>