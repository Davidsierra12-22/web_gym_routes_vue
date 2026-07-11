<template>
  <q-page class="group-view">
    <div class="group-header">
      <div>
        <p class="eyebrow">Sección de piernas</p>
        <h1>Elige tu zona de pierna</h1>
        <p class="group-description">
          Selecciona entre cuádriceps o pantorrillas para ver las rutinas con texto y video.
        </p>
      </div>
      <div class="header-image">
        <template v-if="isImageUrl(imageUrl)">
          <img class="header-image-img" :src="imageUrl" alt="Piernas" />
        </template>
        <template v-else>
          <div class="header-image-placeholder">Espacio para imagen de fondo de piernas</div>
        </template>
      </div>
    </div>

    <div class="group-options">
      <p class="section-eyebrow">Subgrupos</p>
      <div class="cards-grid">
        <q-card
          v-for="item in items"
          :key="item.name"
          class="menu-card"
          flat
          bordered
          @click="goTo(item.route)"
        >
          <div class="menu-card-image" v-if="isImageUrl(item.imageUrl)">
            <img class="menu-card-image-img" :src="item.imageUrl" :alt="item.name" />
          </div>
          <q-card-section>
            <div class="menu-card-title">{{ item.name }}</div>
            <p class="menu-card-description">{{ item.description }}</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const items = [
  {
    name: 'Cuádriceps',
    description: 'Ejercicios para potencia y volumen en los músculos de la parte frontal de la pierna.',
    route: '/piernas/cuadriceps',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv6DRI0uIkGTgOKaLWQHpWsJunwuJvzOtLrt90YYO2Pw&s=10'
  },
  {
    name: 'Pantorrillas',
    description: 'Rutinas para fuerza, estabilidad y definición en las pantorrillas.',
    route: '/piernas/pantorrillas',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBkZmiV-MOCaiETzyQraZNcwyXNDA5GaxpD64tHLJ9-g&s=10'
  }
]

const imageUrl = 'https://st.depositphotos.com/2389277/4385/i/450/depositphotos_43856599-stock-photo-bodybuilder-legs.jpg'

function isImageUrl(url) {
  return typeof url === 'string' && /^https?:\/\//i.test(url)
}

function goTo(route) {
  router.push(route)
}
</script>

<style scoped>
.group-view {
  padding: 24px;
  color: #f5f7fb;
}

.group-header {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 18px;
  margin-bottom: 24px;
  align-items: center;
}

.eyebrow,
.section-eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.75rem;
  color: #ffb347;
  margin-bottom: 8px;
}

.group-header h1 {
  margin: 0 0 12px;
  font-size: 2rem;
  color: #ffffff;
}

.group-description {
  margin: 0;
  color: #c8cde0;
  line-height: 1.7;
  max-width: 640px;
}

.header-image {
  position: relative;
  min-height: 220px;
  border-radius: 20px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.14);
}

.header-image-placeholder {
  min-height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c7cbd6;
  text-align: center;
  padding: 18px;
}

.header-image-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
  background: rgba(255, 255, 255, 0.04);
}

.cards-grid {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.menu-card {
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.menu-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.18);
}

.menu-card-image {
  height: 140px;
  overflow: hidden;
}

.menu-card-image-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
  background: rgba(255, 255, 255, 0.04);
}

.menu-card-title {
  margin: 0 0 10px;
  font-size: 1.05rem;
  font-weight: 700;
  color: #ffffff;
}

.menu-card-description {
  margin: 0;
  color: #c8cde0;
  line-height: 1.6;
}

@media (max-width: 980px) {
  .group-header {
    grid-template-columns: 1fr;
  }

  .cards-grid {
    grid-template-columns: 1fr;
  }
}
</style>
