<script lang="ts" setup>
defineProps({
  form: {},
});

const submitForm = () => {
  // Aquí puedes procesar los datos del formulario
  console.log(form);
};
</script>
<template>
  <div>
    <h2>{{ form.name }}</h2>
    <p>{{ form.descripcion }}</p>
    <form @submit="submitForm">
      <div v-for="(question, index) in form.form" :key="index">
        <label>{{ question.question }}</label>
        <div v-if="question.type === 'SELECT'">
          <select v-model="question.response">
            <option
              v-for="item in question.items"
              :key="item.id"
              :value="item.value"
            >
              {{ item.value }}
            </option>
          </select>
        </div>
        <div v-else-if="question.type === 'INPUT'">
          <input v-model="question.response" type="text" />
        </div>
        <div v-else-if="question.type === 'CHECKBOX'">
          <div v-for="(item, itemIndex) in question.items" :key="itemIndex">
            <input type="checkbox" :value="item" v-model="question.response" />
            <label>{{ item }}</label>
          </div>
        </div>
      </div>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>
