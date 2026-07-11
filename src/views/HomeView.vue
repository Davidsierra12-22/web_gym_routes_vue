<template>
  <q-page class="home-view">
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-badge">GYM MODERNO • TECNOLOGÍA</div>
        <h1>Iron Forge Gym</h1>
        <p class="hero-description">
          Un espacio de alto rendimiento pensado para transformar tu cuerpo con maquinaria premium,
          ambientes inteligentes y rutinas guiadas para cada grupo muscular.
        </p>
        <div class="hero-actions">
        </div>
      </div>

      <div class="hero-panel">
        <div class="hero-panel-inner">
          <p class="panel-title">Tecnología de punta</p>
          <ul>
            <li>Maquinaria inteligente</li>
            <li>Entrenamiento guiado</li>
            <li>Ambiente premium</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="categories-section">
      <div class="section-title">
        <p class="section-eyebrow">Áreas de trabajo</p>
        <h2>Elige tu foco y construye fuerza</h2>
      </div>

      <div class="cards-grid">
        <div
          v-for="group in muscleGroups"
          :key="group.title"
          class="muscle-card"
          :style="{ backgroundImage: isImageUrl(group.imageLabel) ? `url(${group.imageLabel})` : 'none' }"
          @click="goTo(group.route)"
        >
          <div class="card-overlay"></div>
          <div class="card-content">
            <h3 class="card-title">{{ group.title }}</h3>
            <p class="card-description">{{ group.description }}</p>
            <q-btn label="DESCUBRIR" class="discover-btn" no-caps flat />
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const muscleGroups = [
  {
    title: 'Brazos',
    description: 'Fortalece bíceps, tríceps y antebrazo con ejercicios de fuerza y definición.',
    route: '/brazos',
    imageLabel: 'https://static8.depositphotos.com/1049680/1017/i/450/depositphotos_10171107-stock-photo-strong-biceps.jpg'
  },
  {
    title: 'Espalda',
    description: 'Trabaja dorsales y trapecio para una postura más fuerte y amplia.',
    route: '/espalda',
    imageLabel: 'https://static.vecteezy.com/system/resources/previews/016/198/897/large_2x/man-showing-muscular-back-against-conctete-wall-photo.jpg'
  },
  {
    title: 'Pectoral',
    description: 'Desarrolla pecho con rutinas enfocadas en fuerza y volumen.',
    route: '/pectoral',
    imageLabel: 'https://img.magnific.com/foto-gratis/vista-frontal-hombre-camisa-forma-mostrando-pectorales_23-2148700660.jpg?semt=ais_hybrid&w=740&q=80'
  },
  {
    title: 'Piernas',
    description: 'Potencia tus piernas con trabajo de cuádriceps y pantorrillas.',
    route: '/piernas',
    imageLabel: 'https://st.depositphotos.com/2389277/4385/i/450/depositphotos_43856599-stock-photo-bodybuilder-legs.jpg'
  }
]

function isImageUrl(url) {
  return typeof url === 'string' && /^https?:\/\//i.test(url)
}

function goTo(route) {
  router.push(route)
}
</script>

<style scoped>
.home-view {
  padding: 24px;
  min-height: calc(100vh - 40px);
  color: #f5f7fb;
}

.hero-section {
  display: grid;
  grid-template-columns: 1.4fr 0.8fr;
  gap: 24px;
  align-items: center;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  padding: 28px;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.28);
}

.hero-badge {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(255, 151, 0, 0.16);
  color: #ffb347;
  font-size: 0.8rem;
  letter-spacing: 0.2em;
  margin-bottom: 12px;
}

.hero-content h1 {
  font-size: 2.8rem;
  margin: 0 0 12px;
  color: #ffffff;
}

.hero-description {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #c8cde0;
  max-width: 620px;
}

.hero-actions {
  margin-top: 20px;
}

.hero-panel {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.hero-panel-inner {
  background: linear-gradient(135deg, rgba(255, 151, 0, 0.2), rgba(255, 255, 255, 0.04));
  border-radius: 16px;
  padding: 18px;
}

.panel-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 10px;
}

.hero-panel ul {
  margin: 0;
  padding-left: 18px;
  color: #d8dce8;
}

.categories-section {
  margin-top: 24px;
}

.section-title {
  margin-bottom: 16px;
}

.section-eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.75rem;
  color: #ffb347;
  margin-bottom: 6px;
}

.section-title h2 {
  margin: 0;
  color: #ffffff;
  font-size: 1.6rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.muscle-card {
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 380px;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.muscle-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
  filter: brightness(1.05);
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0.8) 100%);
  pointer-events: none;
}

.card-content {
  position: relative;
  z-index: 1;
  padding: 28px 20px 20px;
  width: 100%;
  color: #ffffff;
  text-align: center;
}

.card-title {
  margin: 0 0 12px;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.card-description {
  margin: 0 0 16px;
  color: #e0e0e0;
  font-size: 0.9rem;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.discover-btn {
  background: #ffb347 !important;
  color: #050816 !important;
  font-weight: 700;
  padding: 8px 24px;
  border-radius: 8px;
  font-size: 0.85rem;
  letter-spacing: 0.1em;
}

@media (max-width: 1200px) {
  .cards-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 1024px) {
  .hero-section {
    grid-template-columns: 1fr;
  }

  .cards-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .home-view {
    padding: 14px;
  }

  .hero-section {
    padding: 18px;
  }

  .hero-content h1 {
    font-size: 2rem;
  }

  .cards-grid {
    grid-template-columns: 1fr;
  }
}
</style>
