<template>
  <div id="app">
    <hello></hello>
  </div>
</template>

<script setup lang="ts">
import Hello from './components/Hello.vue';
import { ipcRenderer } from './electron';
ipcRenderer.send('message', 'Hello from App.vue!');
</script>
