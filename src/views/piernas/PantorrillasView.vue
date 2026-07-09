<template>
  <ExerciseSection
    title="Pantorrillas"
    description="Rutina para mejorar la fuerza y la resistencia de las pantorrillas con énfasis en la extensión completa."
    :exercises="exercises"
  />
</template>

<script setup>
import ExerciseSection from '../../components/ExerciseSection.vue'

const exercises = [
  {
    name: 'Elevación de Talones de Pie',
    target: 'Gastrocnemio (gemelos)',
    description: 'Ejercicio de aislamiento enfocado en el desarrollo del músculo gastrocnemio (los gemelos).',
    technique: 'Apoya la punta de los pies en el escalón o máquina, dejando los talones libres. Baja los talones al máximo para estirar el músculo y luego sube lo más alto que puedas quedando en puntas de pie.',
    tip: 'Sostén la contracción un segundo arriba y baja despacio. Evita rebotar rápido aprovechando la inercia.',
    videoLabel: 'https://www.youtube.com/shorts/FtYFpEC2GYM?feature=share'
  },
  {
    name: 'Elevación de Talones Sentado',
    target: 'Sóleo',
    description: 'Al flexionar la rodilla, este ejercicio aísla principalmente el músculo sóleo, ubicado debajo de los gemelos.',
    technique: 'Siéntate en la máquina colocando las almohadillas sobre tus muslos. Realiza la extensión y flexión de tobillo de forma pausada y controlada en todo su rango de movimiento.',
    tip: 'Como el sóleo es un músculo con mayor porcentaje de fibras lentas, responde mucho mejor a repeticiones controladas y tiempos de bajo estrés prolongados.',
    videoLabel: 'https://www.youtube.com/shorts/UMLPOczy2Tk?feature=share'
  }
]
</script>
