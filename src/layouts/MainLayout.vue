<template>
  <div class="main-layout">
    <aside class="sidebar">Menú lateral</aside>
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>

<style scoped>
.main-layout { display: flex; min-height: 100vh; }
.sidebar { width: 240px; background:#f5f5f5; padding:16px }
.content { flex:1; padding:16px }
</style>
