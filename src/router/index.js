import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('../views/HomeView.vue')

const PectSuperior = () => import('../views/pectoral/SuperiorView.vue')
const PectCentral = () => import('../views/pectoral/CentralView.vue')
const PectInferior = () => import('../views/pectoral/InferiorView.vue')

const Biceps = () => import('../views/brazos/BicepsView.vue')
const Triceps = () => import('../views/brazos/TricepsView.vue')
const Antebrazo = () => import('../views/brazos/AntebrazoView.vue')

const Dorsales = () => import('../views/espalda/DorsalesView.vue')
const Trapecio = () => import('../views/espalda/TrapecioView.vue')

const Cuadriceps = () => import('../views/piernas/CuadricepsView.vue')
const Pantorrillas = () => import('../views/piernas/PantorrillasView.vue')

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/pectoral/superior', name: 'pect-superior', component: PectSuperior },
  { path: '/pectoral/central', name: 'pect-central', component: PectCentral },
  { path: '/pectoral/inferior', name: 'pect-inferior', component: PectInferior },
  { path: '/brazos/biceps', name: 'biceps', component: Biceps },
  { path: '/brazos/triceps', name: 'triceps', component: Triceps },
  { path: '/brazos/antebrazo', name: 'antebrazo', component: Antebrazo },
  { path: '/espalda/dorsales', name: 'dorsales', component: Dorsales },
  { path: '/espalda/trapecio', name: 'trapecio', component: Trapecio },
  { path: '/piernas/cuadriceps', name: 'cuadriceps', component: Cuadriceps },
  { path: '/piernas/pantorrillas', name: 'pantorrillas', component: Pantorrillas }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
