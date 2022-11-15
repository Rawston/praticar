<template>
  <nav>
    <router-link :to="{name: 'home'}">Início</router-link> |
    <router-link :to="{name: 'todos-view.index'}">Todos</router-link>
  </nav>
  <router-view/>
</template>