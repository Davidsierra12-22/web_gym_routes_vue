<template>
  <q-layout view="hHh lpR fFf" class="main-layout">
    <q-header elevated class="main-header">
      <q-toolbar>
        <q-btn flat dense round icon="fitness_center" class="q-mr-sm" @click="goHome" />
        <q-toolbar-title class="toolbar-title" role="button" tabindex="0" @click="goHome" @keydown.enter.prevent="goHome" @keydown.space.prevent="goHome">Iron Forge Gym</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goHome() {
  router.push('/')
}
</script>

<style scoped>
.main-layout {
  min-height: 100vh;
  background: linear-gradient(135deg, #050816 0%, #0f172a 100%);
}

.main-header {
  background: rgba(5, 8, 22, 0.95);
  backdrop-filter: blur(12px);
}

.toolbar-title {
  cursor: pointer;
}

.q-page-container {
  padding: 0;
}
</style>
