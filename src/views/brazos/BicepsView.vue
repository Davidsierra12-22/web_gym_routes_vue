<template>
  <ExerciseSection
    title="Bíceps"
    description="Rutina enfocada en volumen y control para desarrollar la parte frontal del brazo con técnicas seguras."
    :exercises="exercises"
  />
</template>

<script setup>
import ExerciseSection from '../../components/ExerciseSection.vue'

const exercises = [
  {
    name: 'Curl de Bíceps Alterno con Mancuernas',
    target: 'Bíceps',
    description: 'El ejercicio rey para construir los bíceps de forma simétrica trabajando cada brazo de manera independiente.',
    technique: 'Empieza con las mancuernas a los lados y las palmas mirándose entre sí. A medida que subes el peso, gira la muñeca (supinación) para que la palma mire hacia arriba al final del movimiento.',
    tip: 'Controla la bajada (fase excéntrica) y evita balancear el cuerpo hacia atrás para darte impulso.',
    videoLabel: 'https://www.youtube.com/shorts/zX7Y1MwiPTk?feature=share'
  },
  {
    name: 'Curl de Bíceps en Banco Predicador',
    target: 'Bíceps',
    description: 'Ejercicio excelente para aislar el bíceps y eliminar por completo cualquier posibilidad de hacer trampa con el cuerpo.',
    technique: 'Apoya bien los brazos en la almohadilla inclinada del banco. Baja la barra EZ de forma controlada hasta estirar casi por completo el brazo y vuelve a subir contrayendo con fuerza.',
    tip: 'No extiendas los codos al 100% bruscamente abajo para evitar lesiones en los tendones; mantén siempre una mínima tensión.',
    videoLabel: 'https://youtu.be/Ks5KNBSmw6A?si=_z8HS1iQ7ytRnOLH'
  }
]
</script>
