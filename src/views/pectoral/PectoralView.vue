<template>
  <q-page class="group-view">
    <div class="hero-header">
      <q-btn
        flat
        dense
        color="orange-4"
        icon="arrow_back"
        label="Volver"
        class="back-btn"
        @click="goBack"
      />
    </div>

    <div class="group-header">
      <div class="header-content">
        <p class="eyebrow">{{ sectionData.eyebrow }}</p>
        <h1 class="header-title">{{ sectionData.title }}</h1>
        <p class="header-subtitle">{{ sectionData.subtitle }}</p>
        
        <div class="benefits-block">
          <h3 class="benefits-title">Beneficios de entrenar pecho</h3>
          <ul class="benefits-list">
            <li v-for="(benefit, idx) in sectionData.benefits" :key="idx">
              <span class="benefit-icon">✓</span>
              {{ benefit }}
            </li>
          </ul>
        </div>
      </div>
      
      <div class="header-visual">
        <div class="visual-container" v-if="isImageUrl(imageUrl)">
          <img class="visual-image" :src="imageUrl" :alt="sectionData.name" />
        </div>
      </div>
    </div>

    <div class="group-options">
      <p class="section-eyebrow">Subgrupos</p>
      <div class="cards-grid">
        <div
          v-for="item in items"
          :key="item.name"
          class="menu-card"
          :style="{ backgroundImage: isImageUrl(item.imageUrl) ? `url(${item.imageUrl})` : 'none' }"
          @click="goTo(item.route)"
        >
          <div class="card-overlay"></div>
          <div class="card-content">
            <h3 class="card-title">{{ item.name }}</h3>
            <p class="card-description">{{ item.description }}</p>
            <q-btn label="VER MÁS" class="discover-btn" no-caps flat />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const sectionData = {
  name: 'Pectoral',
  eyebrow: 'Sección de pectoral',
  title: 'Pecho poderoso y voluminoso',
  subtitle: 'Trabaja superior, central e inferior. Pecho grande, definido y en proporción.',
  benefits: [
    'Pecho voluminoso y musculoso',
    'Simetría perfecta del torso',
    'Mayor fuerza en empujes',
    'Líneas definidas y marcadas',
    'Presencia imponente'
  ]
}

const items = [
  {
    name: 'Superior',
    description: 'Rutinas para la parte alta del pecho y mejor desarrollo del pectoral superior.',
    route: '/pectoral/superior',
    imageUrl: 'https://img.magnific.com/foto-gratis/vista-frontal-hombre-camisa-forma-mostrando-pectorales_23-2148700660.jpg?semt=ais_hybrid&w=740&q=80'
  },
  {
    name: 'Central',
    description: 'Ejercicios clásicos para el pecho central y la fuerza general de pectoral.',
    route: '/pectoral/central',
    imageUrl: 'https://img.magnific.com/foto-gratis/vista-frontal-hombre-camisa-forma-mostrando-pectorales_23-2148700660.jpg?semt=ais_hybrid&w=740&q=80'
  },
  {
    name: 'Inferior',
    description: 'Trabajo para la parte baja del pecho, ideal para volumen y control.',
    route: '/pectoral/inferior',
    imageUrl: 'https://img.magnific.com/foto-gratis/vista-frontal-hombre-camisa-forma-mostrando-pectorales_23-2148700660.jpg?semt=ais_hybrid&w=740&q=80'
  }
]

const imageUrl = 'https://img.magnific.com/foto-gratis/vista-frontal-hombre-camisa-forma-mostrando-pectorales_23-2148700660.jpg?semt=ais_hybrid&w=740&q=80'

function isImageUrl(url) {
  return typeof url === 'string' && /^https?:\/\//i.test(url)
}

function goTo(route) {
  router.push(route)
}

function goBack() {
  router.back()
}
</script>

<style scoped>
.group-view {
  padding: 0;
  color: #f5f7fb;
}

.hero-header {
  padding: 16px 24px;
  background: rgba(255, 255, 255, 0.02);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
}

.back-btn {
  border-radius: 12px;
  background: rgba(255, 151, 0, 0.12) !important;
  border: 1px solid rgba(255, 151, 0, 0.2);
  transition: all 0.3s ease;
}

.back-btn:hover {
  background: rgba(255, 151, 0, 0.25) !important;
  border-color: rgba(255, 151, 0, 0.4);
}

.group-header {
  display: grid;
  grid-template-columns: 1.2fr 350px;
  gap: 40px;
  padding: 40px 24px;
  align-items: center;
}

.header-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.eyebrow,
.section-eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.75rem;
  color: #ffb347;
  margin: 0;
}

.header-title {
  margin: 0;
  font-size: 2.4rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
}

.header-subtitle {
  margin: 0;
  color: #d1d7e3;
  font-size: 1.05rem;
  line-height: 1.7;
  max-width: 580px;
}

.benefits-block {
  margin-top: 12px;
}

.benefits-title {
  margin: 0 0 14px;
  font-size: 0.95rem;
  font-weight: 600;
  color: #ffb347;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.benefits-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 20px;
}

.benefits-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #c8cde0;
  font-size: 0.9rem;
  line-height: 1.4;
}

.benefit-icon {
  color: #ffb347;
  font-weight: 700;
  flex-shrink: 0;
}

.header-visual {
  display: flex;
  align-items: center;
  justify-content: center;
}

.visual-container {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 4;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(255, 151, 0, 0.15);
  border: 1px solid rgba(255, 151, 0, 0.2);
}

.visual-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.group-options {
  padding: 24px;
  padding-top: 0;
}

.section-eyebrow {
  margin-bottom: 20px;
}

.cards-grid {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.menu-card {
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 320px;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
}

.menu-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
  filter: brightness(1.08);
}

.menu-card .card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 30%, rgba(0, 0, 0, 0.85) 100%);
  pointer-events: none;
}

.menu-card .card-content {
  position: relative;
  z-index: 1;
  padding: 24px 18px 16px;
  width: 100%;
  color: #ffffff;
  text-align: center;
}

.menu-card .card-title {
  margin: 0 0 10px;
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.menu-card .card-description {
  margin: 0 0 14px;
  color: #e0e0e0;
  font-size: 0.85rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.menu-card .discover-btn {
  background: #ffb347 !important;
  color: #050816 !important;
  font-weight: 700;
  padding: 6px 20px;
  border-radius: 6px;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
}

@media (max-width: 1200px) {
  .group-header {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 32px 24px;
  }

  .header-visual {
    max-width: 300px;
  }

  .benefits-list {
    grid-template-columns: 1fr;
  }

  .cards-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .group-header {
    padding: 28px 16px;
  }

  .header-title {
    font-size: 1.8rem;
  }

  .header-subtitle {
    font-size: 0.95rem;
  }

  .cards-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 480px) {
  .hero-header {
    padding: 12px 16px;
  }

  .group-header {
    padding: 20px 16px;
  }

  .header-title {
    font-size: 1.5rem;
  }

  .benefits-list {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .cards-grid {
    grid-template-columns: 1fr;
  }
}
</style>
