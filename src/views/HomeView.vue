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
        <q-card
          v-for="group in muscleGroups"
          :key="group.title"
          class="muscle-card"
          flat
          bordered
          @click="goTo(group.route)"
        >
          <div class="card-image">
            <div class="image-placeholder">{{ group.imageLabel }}</div>
          </div>

          <q-card-section>
            <div class="text-h6">{{ group.title }}</div>
            <p class="card-description">{{ group.description }}</p>
          </q-card-section>
        </q-card>
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
    description: 'Fortalece bíceps y tríceps con ejercicios de fuerza y definición.',
    route: '/brazos/biceps',
    imageLabel: 'Espacio para imagen de brazos'
  },
  {
    title: 'Espalda',
    description: 'Trabaja dorsales y trapecio para una postura más fuerte y amplia.',
    route: '/espalda/dorsales',
    imageLabel: 'Espacio para imagen de espalda'
  },
  {
    title: 'Pectoral',
    description: 'Desarrolla pecho con rutinas enfocadas en fuerza y volumen.',
    route: '/pectoral/superior',
    imageLabel: 'Espacio para imagen de pectoral'
  },
  {
    title: 'Piernas',
    description: 'Potencia tus piernas con trabajo de cuádriceps y pantorrillas.',
    route: '/piernas/cuadriceps',
    imageLabel: 'Espacio para imagen de piernas'
  }
]

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
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.muscle-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
}

.card-image {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255, 151, 0, 0.4), rgba(255, 255, 255, 0.05));
}

.image-placeholder {
  color: #ffffff;
  text-align: center;
  padding: 12px 16px;
  border: 1px dashed rgba(255, 255, 255, 0.45);
  border-radius: 12px;
  font-size: 0.95rem;
  max-width: 86%;
}

.card-description {
  color: #c8cde0;
  margin-top: 8px;
  min-height: 48px;
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
