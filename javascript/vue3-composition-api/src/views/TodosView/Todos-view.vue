<template>
   <h1>Lista de Tarefas</h1>

   <ul>
      <li v-for="todo in todos" :key="todo.identify">
            {{ todo.name }}
      </li>
   
   </ul>
</template>



<script>
export default{
   name: 'Todos',
   setup(){
      const todos = [
         {identify: 1, name: 'tarefa 01', completed: true},
         {identify: 2, name: 'tarefa 02', completed: false},
         {identify: 3, name: 'tarefa 03', completed: true},
      ]

      return{
         todos
      }


   }
}

</script>