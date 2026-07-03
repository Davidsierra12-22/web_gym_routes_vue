<template>
  <ExerciseSection
    title="Trapecio"
    description="Rutina para desarrollar la parte superior de la espalda, conservar una buena postura y mejorar la elevación del hombro."
    :exercises="exercises"
  />
</template>

<script setup>
import ExerciseSection from '../../components/ExerciseSection.vue'

const exercises = [
  {
    name: 'Encogimiento de Hombros con Mancuernas (Shrugs)',
    target: 'Trapecio superior',
    description: 'Ejercicio de aislamiento directo para desarrollar la porción superior de los trapecios.',
    technique: 'Sostén las mancuernas a los lados y eleva los hombros directamente hacia tus orejas lo más alto posible. Sostén un segundo arriba y baja despacio.',
    tip: 'No hagas círculos con los hombros (rotación); el movimiento debe ser estrictamente vertical (de arriba a abajo) para evitar desgastes articulares.',
    videoLabel: 'Encogimiento de Hombros con Mancuernas (Shrugs)'
  },
  {
    name: 'Remo al Mentón con Barra (Upright Row)',
    target: 'Trapecio y deltoides',
    description: 'Ejercicio que trabaja la parte superior de la espalda en conjunto con los deltoides laterales.',
    technique: 'Sostén una barra frente a ti con las manos ligeramente separadas. Jálala verticalmente manteniéndola pegada al cuerpo, elevando los codos por encima del nivel de las manos.',
    tip: 'Sube la barra solo hasta la altura del pecho para no forzar de más el manguito rotador del hombro.',
    videoLabel: 'Remo al Mentón con Barra (Upright Row)'
  }
]
</script>
