<template>
  <ExerciseSection
    title="Pectoral Superior"
    description="Entrenamiento para enfatizar la parte alta del pecho con ejercicios de empuje y control biomecánico."
    :exercises="exercises"
  />
</template>

<script setup>
import ExerciseSection from '../../components/ExerciseSection.vue'

const exercises = [
  {
    name: 'Press de Banca Inclinado con Mancuernas',
    target: 'Pectoral superior',
    description: 'Enfocado en desarrollar la porción clavicular (la parte alta) del pectoral, dando un aspecto más estético.',
    technique: 'En un banco inclinado a unos 30 o 45 grados, empuja las mancuernas verticalmente hacia arriba desde la altura de tus hombros y llévalas hacia el centro sin que choquen.',
    tip: 'Un ángulo mayor a 45 grados pasará todo el esfuerzo a los hombros; mantén el banco en la inclinación justa.',
    videoLabel: 'Press de Banca Inclinado con Mancuernas'
  },
  {
    name: 'Aperturas Inclinadas con Mancuernas',
    target: 'Pectoral superior',
    description: 'Variante del fly clásico diseñado para aislar e hipertrofiar las fibras superiores del pecho.',
    technique: 'En banco inclinado, realiza el movimiento de apertura circular con los codos semiflexionados, buscando un estiramiento profundo pero controlado en la parte alta.',
    tip: 'Concéntrate en juntar tus bíceps contra los lados del pecho al subir para maximizar la contracción del pectoral superior.',
    videoLabel: 'Aperturas Inclinadas con Mancuernas'
  }
]
</script>
