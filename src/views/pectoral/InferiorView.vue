<template>
  <ExerciseSection
    title="Pectoral Inferior"
    description="Rutina para la base del pecho, enfocada en la porción baja con empujes declinados y control de la contracción."
    :exercises="exercises"
  />
</template>

<script setup>
import ExerciseSection from '../../components/ExerciseSection.vue'

const exercises = [
  {
    name: 'Fondos en Paralelas (Chest Dips)',
    target: 'Pectoral inferior',
    description: 'Excelente ejercicio de peso corporal enfocado en dar definición a la parte baja del pecho.',
    technique: 'Sostente en las barras paralelas, inclina el torso notablemente hacia el frente y flexiona los codos bajando de forma controlada. Empújate hacia arriba extendiendo los brazos sin bloquear los codos.',
    tip: 'Si mantienes el cuerpo completamente vertical, el esfuerzo se irá a los tríceps. Recuerda inclinarte adelante para activar el pecho.',
    videoLabel: 'https://www.youtube.com/shorts/JT2r9qaP9bU?feature=share'
  },
  {
    name: 'Cruce de Poleas Altas (Cable Crossover)',
    target: 'Pectoral inferior y central',
    description: 'Ejercicio de aislamiento con tensión constante que esculpe la línea inferior y central del pecho.',
    technique: 'Colócate en medio de dos poleas altas. Da un paso al frente para ganar estabilidad y junta las manos abajo y adelante tuyo, simulando dar un abrazo.',
    tip: 'Cruza ligeramente una mano sobre otra al final del movimiento para conseguir una contracción máxima en la zona central.',
    videoLabel: 'https://www.youtube.com/shorts/iXWbc8SF9KA?feature=share'
  }
]
</script>
