<template>
  <ExerciseSection
    title="Tríceps"
    description="Entrenamiento para la extensión del brazo y definición del tríceps con técnicas seguras y efectivas."
    :exercises="exercises"
  />
</template>

<script setup>
import ExerciseSection from '../../components/ExerciseSection.vue'

const exercises = [
  {
    name: 'Extensión de Tríceps en Polea Alta',
    target: 'Tríceps',
    description: 'Ejercicio clásico en polea enfocado en la cabeza lateral y medial del tríceps.',
    technique: 'Colócate frente a la polea, pega los codos firmemente a los costados del cuerpo y empuja la barra o cuerda hacia el piso hasta extender los brazos por completo.',
    tip: 'Los codos deben actuar como bisagras fijas; si se mueven hacia adelante o hacia arriba, estás metiendo el hombro en el ejercicio.',
    videoLabel: 'https://www.youtube.com/shorts/O0bOBEys5pc?feature=share'
  },
  {
    name: 'Copa de Tríceps con Mancuerna (A dos manos)',
    target: 'Tríceps',
    description: 'Ejercicio de extensión superior que enfoca el estímulo en la cabeza larga del tríceps.',
    technique: 'Siéntate en un banco, sujeta una mancuerna pesada con ambas manos por detrás de la cabeza. Baja el peso flexionando los codos y luego empuja verticalmente hacia el techo.',
    tip: 'Intenta mantener los codos lo más cerrados posible (apuntando hacia el frente, no hacia los lados) para proteger tus articulaciones.',
    videoLabel: 'https://www.youtube.com/shorts/GCf-uePkG8k?feature=share'
  }
]
</script>
