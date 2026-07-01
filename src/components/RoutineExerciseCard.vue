<template>
  <q-card class="routine-card" flat bordered>
    <q-card-section class="card-header">
      <div class="text-h6">{{ title }}</div>
      <q-chip color="orange-7" text-color="white" dense>Rutina</q-chip>
    </q-card-section>

    <q-separator />

    <q-card-section>
      <div class="section-block">
        <div class="section-label">Descripción</div>
        <p>{{ description }}</p>
      </div>

      <div class="section-block">
        <div class="section-label">Técnica correcta</div>
        <p>{{ tecnica }}</p>
      </div>

      <div class="section-block">
        <div class="section-label">Tip</div>
        <p>{{ tip }}</p>
      </div>
    </q-card-section>

    <q-card-section class="video-section">
      <div class="video-placeholder">
        <q-icon name="play_circle_outline" size="md" />
        <span>{{ videoLabel }}</span>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tecnica: { type: String, required: true },
  tip: { type: String, required: true },
  videoLabel: { type: String, default: 'Espacio para video' }
})
</script>

<style scoped>
.routine-card {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 18px;
  color: #f5f7fb;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.section-block {
  margin-bottom: 12px;
}

.section-label {
  font-weight: 700;
  color: #ffb347;
  margin-bottom: 4px;
}

.video-section {
  padding-top: 0;
}

.video-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 92px;
  border: 1px dashed rgba(255, 255, 255, 0.28);
  border-radius: 12px;
  color: #d8dce8;
  background: rgba(255, 255, 255, 0.04);
}
</style>
