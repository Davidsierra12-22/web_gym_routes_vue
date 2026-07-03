<template>
  <ExerciseSection
    title="Cuádriceps"
    description="Sesión para fortalecer el frente de las piernas con énfasis en estabilidad, fuerza y correcta amplitud de movimiento."
    :exercises="exercises"
  />
</template>

<script setup>
import ExerciseSection from '../../components/ExerciseSection.vue'

const exercises = [
  {
    name: 'Sentadilla Libre con Barra (Barbell Squat)',
    target: 'Cuádriceps y tren inferior',
    description: 'El ejercicio multiarticular rey indiscutible para la fuerza, potencia y masa de todo el tren inferior.',
    technique: 'Coloca la barra sobre tus trapecios, separa los pies al ancho de los hombros. Baja empujando la cadera hacia atrás y flexionando las rodillas, manteniendo la espalda recta, hasta romper el paralelo (90 grados).',
    tip: 'Asegúrate de que tus rodillas sigan siempre la misma dirección de la punta de tus pies, evitando que se metan hacia adentro (valgo de rodilla).',
    videoLabel: 'Sentadilla Libre con Barra (Barbell Squat)'
  },
  {
    name: 'Prensa de Piernas (Leg Press)',
    target: 'Cuádriceps',
    description: 'Permite mover grandes cargas de manera segura para aislar y fatigar los cuádriceps de forma masiva.',
    technique: 'Apoya bien la espalda en el respaldo de la máquina. Coloca tus pies en la plataforma y destraba los seguros. Baja controladamente flexionando las rodillas hacia tu pecho y empuja sin llegar a bloquear las piernas arriba.',
    tip: 'NUNCA estires ni bloquees las rodillas por completo en la fase más alta; un bloqueo con mucho peso puede causar una hiperextensión o lesión grave.',
    videoLabel: 'Prensa de Piernas (Leg Press)'
  }
]
</script>
