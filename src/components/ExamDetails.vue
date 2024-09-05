<template>
    <div class="exam-details">
      <h2>{{ exam.name }}</h2>
      <p><strong>Responsável:</strong> {{ exam.responsible }}</p>
      <p><strong>Período:</strong> {{ exam.period }}</p>
      <p><strong>Função:</strong> {{ exam.function }}</p>
      <p><strong>Categoria:</strong> {{ exam.categoryDisplay }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ExamDetails',
    props: {
      exam: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .exam-details h2 {
    margin-top: 0;
  }
  </style>