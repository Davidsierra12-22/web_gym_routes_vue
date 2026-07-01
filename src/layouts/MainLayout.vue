<template>
  <q-layout view="hHh lpR fFf" class="main-layout">
    <q-header elevated class="main-header">
      <q-toolbar>
        <q-icon name="fitness_center" size="md" class="q-mr-sm" />
        <q-toolbar-title>Iron Forge Gym</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
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

.q-page-container {
  padding: 0;
}
</style>
