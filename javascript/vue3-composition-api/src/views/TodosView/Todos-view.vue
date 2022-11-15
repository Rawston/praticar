<template>
   <h1>Lista de Tarefas</h1>

   <ul>
      <li v-for="todo in todosView" :key="todo.identify">

         {{ todo.name }}
      </li>
   </ul>

</template>

<script>
export default {
   name: "TodosView",
   setup(){
      const todosView = [
{identify: 1, name: 'tarefa 01', completed: true},
{identify: 2, name: 'tarefa 02', completed: true},
{identify: 3, name: 'tarefa 03', completed: true},
      ]

      return {
         todosView
      }
   }
}
</script>