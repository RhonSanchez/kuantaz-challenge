<script lang="ts" setup>
import FormGenerator from "@/components/FormGenerator.vue";
import { useFormDataStore } from "../store/formData";
import { getValidationForms } from "~/services/forms";
import { Form } from "~/types/form";
const show = ref(false);

const { forms, getForms, addSelectedForm } = useFormDataStore();
const route = useRoute();

console.log(forms);
const handleCreatePage = () => {
  navigateTo("/create");
};
const handleShow = (data: Form) => {
  console.log("click");
  addSelectedForm(data);
  navigateTo("/show");
};

onMounted(async () => {
  await getForms();
});
</script>

<template>
  <main class="d-flex flex-wrap">
    <CardNewForm @click="handleCreatePage" />
    <CardForm
      v-for="form in forms"
      :key="form.formulario.name"
      :form="form"
      @click="handleShow"
    />
  </main>
</template>
