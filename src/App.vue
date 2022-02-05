<template>
  <div class="app">
    <router-view></router-view>
    <router-link to="/home">home</router-link>&nbsp&nbsp
    <router-link to="/login">login</router-link>
    <br />
    <HelloWorld />
    <h1>A vue3 cli made by coisini</h1>
    <h3>{{ index.count }}</h3>
    <button @click="index.increment">+</button>
    <button @click="index.decrement">-</button>
  </div>
</template>

<script setup lang="ts">
import { indexStore } from "@/store/index";
import HelloWorld from "@/components/HelloWorld.vue";
const index = indexStore();

const modules = import.meta.glob("./pages/*.ts");
for (const path in modules) {
  modules[path]().then((mod) => {
    console.log(path, mod);
  });
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
