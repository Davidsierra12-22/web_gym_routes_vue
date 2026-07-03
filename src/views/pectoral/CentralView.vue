<template>
  <ExerciseSection
    title="Pectoral Central"
    description="Sesión para cargar el centro del pecho con movimientos completos y tensión constante."
    :exercises="exercises"
  />
</template>

<script setup>
import ExerciseSection from '../../components/ExerciseSection.vue'

const exercises = [
  {
    name: 'Press de Banca Plano con Barra (Bench Press)',
    target: 'Pectoral mayor central',
    description: 'El estándar de oro para medir la fuerza y construir la masa del pectoral mayor central.',
    technique: 'Acuéstate en el banco, apoya los pies firmemente en el suelo y retrae los hombros. Baja la barra controladamente tocando suavemente la parte media del pecho y empuja hacia arriba sin despegar la espalda.',
    tip: 'Mantén los codos en un ángulo de unos 45 grados respecto a tu cuerpo al bajar; nunca los abras por completo a 90 grados ya que destruirías tus hombros.',
    videoLabel: 'Press de Banca Plano con Barra (Bench Press)'
  },
  {
    name: 'Aperturas con Mancuernas en Banco Plano (Dumbbell Flyes)',
    target: 'Pectoral',
    description: 'Ejercicio de aislamiento ideal para estirar las fibras del pectoral en el plano horizontal.',
    technique: 'Acostado con las mancuernas arriba, abre los brazos hacia los lados en forma de arco manteniendo una ligera flexión constante en los codos, hasta sentir el estiramiento en el pecho.',
    tip: 'No dejes que las mancuernas choquen fuertemente arriba; frena el movimiento un centímetro antes para mantener la tensión muscular.',
    videoLabel: 'Aperturas con Mancuernas en Banco Plano (Dumbbell Flyes)'
  }
]
</script>
