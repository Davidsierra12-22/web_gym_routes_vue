<template>
  <ExerciseSection
    title="Antebrazo"
    description="Rutina funcional para fortalecer la muñeca y el antebrazo, mejorando agarre y resistencia en movimientos pesados."
    :exercises="exercises"
  />
</template>

<script setup>
import ExerciseSection from '../../components/ExerciseSection.vue'

const exercises = [
  {
    name: 'Curl de Antebrazo con Barra (Palmas Arriba)',
    target: 'Flexores del antebrazo',
    description: 'Ejercicio de aislamiento enfocado en los flexores del antebrazo, realizado apoyando los brazos en un banco plano o en las piernas.',
    technique: 'Apoya los antebrazos en el banco dejando las muñecas libres por fuera. Baja la barra permitiendo que ruede ligeramente por tus dedos y luego cierra la mano flexionando la muñeca por completo hacia arriba.',
    tip: 'No levantes los codos ni los antebrazos del banco; todo el esfuerzo debe venir estrictamente de la articulación de la muñeca.',
    videoLabel: 'https://www.youtube.com/shorts/EpaLm7tCTyk?feature=share'
  },
  {
    name: "Paseo del Granjero (Farmer's Walk)",
    target: 'Agarre y resistencia del antebrazo',
    description: 'Ejercicio funcional y de fuerza general que revienta el agarre y la resistencia isométrica del antebrazo.',
    technique: 'Sostén dos mancuernas pesadas a los costados, mantén la espalda completamente erguida, los hombros hacia atrás (retraídos) y camina con pasos cortos y firmes.',
    tip: 'No dejes que los hombros se caigan hacia adelante; mantén el abdomen contraído para proteger la zona lumbar durante la caminata.',
    videoLabel: "https://youtu.be/qp8eGtTdmXM?si=Th4jZew57Ijxx5nw"
  }
]
</script>
