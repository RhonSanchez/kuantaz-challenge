<script lang="ts" setup>
import { Form } from "@/types/form";
defineProps({
  form: {} as Form,
});

const name = (data: Form) => {
  return data?.formulario?.name ?? "";
};
const description = (data: Form) => {
  return data?.formulario?.descripcion ?? "";
};
</script>
<template>
  <v-card class="mx-auto my-8" width="100%" prepend-icon="mdi-home">
    <template v-slot:title>
      {{ name(form) }}
    </template>

    <v-card-text>
      {{ description(form) }}
    </v-card-text>
  </v-card>
</template>
