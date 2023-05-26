<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useFormDataStore } from "../store/formData";
import FormGenerator from "@/components/FormGenerator.vue";

const store = useFormDataStore();
const { formSelected } = storeToRefs(store);
console.log(formSelected.value);
</script>

<template>
  <main class="d-flex flex-wrap">
    <FormGenerator :form="formSelected" />
  </main>
</template>
