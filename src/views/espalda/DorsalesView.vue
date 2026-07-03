<template>
  <ExerciseSection
    title="Dorsales"
    description="Sesión para ensanchar y fortalecer la espalda, con ejercicios que reclutan gran parte del torso posterior."
    :exercises="exercises"
  />
</template>

<script setup>
import ExerciseSection from '../../components/ExerciseSection.vue'

const exercises = [
  {
    name: 'Jalón al Pecho en Polea Alta (Lat Pulldown)',
    target: 'Dorsales',
    description: 'El mejor ejercicio mecánico para construir amplitud y lograr la forma en "V" de la espalda.',
    technique: 'Toma la barra con un agarre más ancho que tus hombros. Inclina el torso sutilmente hacia atrás y jala la barra directamente hacia la parte superior del pecho, llevando los codos hacia tus costados.',
    tip: 'Imagina que tus manos son simples ganchos y jala con los codos, sintiendo cómo se juntan las escápulas atrás.',
    videoLabel: 'Jalón al Pecho en Polea Alta (Lat Pulldown)'
  },
  {
    name: 'Remo con Barra de Pie (Barbell Row)',
    target: 'Espalda y dorsales',
    description: 'Ejercicio compuesto básico para añadir densidad y grosor a toda la musculatura de la espalda.',
    technique: 'Flexiona ligeramente las rodillas e inclina el torso hacia adelante a unos 45 grados manteniendo la espalda recta. Jala la barra directo hacia la zona de tu ombligo.',
    tip: 'Mantén el core (abdomen) bien apretado durante todo el movimiento para estabilizar y proteger la columna.',
    videoLabel: 'Remo con Barra de Pie (Barbell Row)'
  }
]
</script>
