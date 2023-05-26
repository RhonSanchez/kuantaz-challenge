<script lang="ts" setup>
import FormGenerator from "@/components/FormGenerator.vue";
const show = ref(false);
const forms = reactive([
  {
    formulario: {
      name: "Formulario 1",
      descripcion: "Este Formulario es para la prueba deKuantaz",
      form: [
        {
          question: "¿Es importante trabajar en Kuantas?",
          type: "SELECT",
          items: [
            { id: 1, value: "SI" },
            { id: 2, value: "NO" },
            { id: 3, value: "QUIZAS" },
          ],
          response: "",
        },
        {
          question: "¿Por qué deberiamos contratarte?",
          type: "INPUT",
          response: "",
        },
        {
          question: "¿Por qué deberiamos contratarte?",
          type: "CHECKBOX",
          items: ["SI", "No"],
          response: [],
        },
      ],
    },
  },
  {
    formulario: {
      name: "Formulario 1",
      descripcion: "Este Formulario es para la prueba deKuantaz",
      form: [
        {
          question: "¿Es importante trabajar en Kuantas?",
          type: "SELECT",
          items: [
            { id: 1, value: "SI" },
            { id: 2, value: "NO" },
            { id: 3, value: "QUIZAS" },
          ],
          response: "",
        },
        {
          question: "¿Por qué deberiamos contratarte?",
          type: "INPUT",
          response: "",
        },
        {
          question: "¿Por qué deberiamos contratarte?",
          type: "CHECKBOX",
          items: ["SI", "No"],
          response: [],
        },
      ],
    },
  },
  {
    formulario: {
      name: "Formulario 1",
      descripcion: "Este Formulario es para la prueba deKuantaz",
      form: [
        {
          question: "¿Es importante trabajar en Kuantas?",
          type: "SELECT",
          items: [
            { id: 1, value: "SI" },
            { id: 2, value: "NO" },
            { id: 3, value: "QUIZAS" },
          ],
          response: "",
        },
        {
          question: "¿Por qué deberiamos contratarte?",
          type: "INPUT",
          response: "",
        },
        {
          question: "¿Por qué deberiamos contratarte?",
          type: "CHECKBOX",
          items: ["SI", "No"],
          response: [],
        },
      ],
    },
  },
  {
    formulario: {
      name: "Formulario 1",
      descripcion: "Este Formulario es para la prueba deKuantaz",
      form: [
        {
          question: "¿Es importante trabajar en Kuantas?",
          type: "SELECT",
          items: [
            { id: 1, value: "SI" },
            { id: 2, value: "NO" },
            { id: 3, value: "QUIZAS" },
          ],
          response: "",
        },
        {
          question: "¿Por qué deberiamos contratarte?",
          type: "INPUT",
          response: "",
        },
        {
          question: "¿Por qué deberiamos contratarte?",
          type: "CHECKBOX",
          items: ["SI", "No"],
          response: [],
        },
      ],
    },
  },
  {
    formulario: {
      name: "Formulario 1",
      descripcion: "Este Formulario es para la prueba deKuantaz",
      form: [
        {
          question: "¿Es importante trabajar en Kuantas?",
          type: "SELECT",
          items: [
            { id: 1, value: "SI" },
            { id: 2, value: "NO" },
            { id: 3, value: "QUIZAS" },
          ],
          response: "",
        },
        {
          question: "¿Por qué deberiamos contratarte?",
          type: "INPUT",
          response: "",
        },
        {
          question: "¿Por qué deberiamos contratarte?",
          type: "CHECKBOX",
          items: ["SI", "No"],
          response: [],
        },
      ],
    },
  },
]);

const route = useRoute();

const handleCreatePage = () => {
  navigateTo("/create");
};
</script>

<template>
  <main class="d-flex flex-wrap">
    <CardNewForm @click="handleCreatePage" />
    <CardForm v-for="form in forms" :key="form.formulario.name" :form="form" />
  </main>
</template>
