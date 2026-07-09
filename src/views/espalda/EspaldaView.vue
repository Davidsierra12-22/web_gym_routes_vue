<template>
  <q-page class="group-view">
    <div class="group-header">
      <div>
        <p class="eyebrow">Sección de espalda</p>
        <h1>Elige tu zona de espalda</h1>
        <p class="group-description">
          Selecciona entre dorsales o trapecio para ver las rutinas con texto y video.
        </p>
      </div>
      <div class="header-image">
        <template v-if="isImageUrl(imageUrl)">
          <img class="header-image-img" :src="imageUrl" alt="Espalda" />
        </template>
        <template v-else>
          <div class="header-image-placeholder">Espacio para imagen de fondo de espalda</div>
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
    name: 'Dorsales',
    description: 'Rutinas para ampliar la espalda y mejorar la fuerza de tracción.',
    route: '/espalda/dorsales',
    imageUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    name: 'Trapecio',
    description: 'Ejercicios para ganar estabilidad y forma en la parte superior de la espalda.',
    route: '/espalda/trapecio',
    imageUrl: 'https://images.pexels.com/photos/2261485/pexels-photo-2261485.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  }
]

const imageUrl = 'https://static.vecteezy.com/system/resources/previews/016/198/897/large_2x/man-showing-muscular-back-against-conctete-wall-photo.jpg'

function isImageUrl(url) {
  return typeof url === 'string' && /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp|svg)(\?.*)?$/i.test(url)
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
  object-fit: cover;
  display: block;
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
  object-fit: cover;
  display: block;
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
