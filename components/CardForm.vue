<script lang="ts" setup>
import { Form } from "@/types/form";
defineProps({
  form: {} as Form,
});
const emit = defineEmits(["click"]);

function handleClick(data: Form) {
  emit("click", data);
}
</script>

<template>
  <v-card>
    <v-sheet
      width="100%"
      height="100px"
      color="primary"
      class="d-flex justify-center align-center elevation-0 rounded-0"
    >
      <v-icon size="80">mdi-form-select</v-icon>
    </v-sheet>

    <v-card-title> {{ form.formulario.name }} </v-card-title>
    <v-card-subtitle> {{ form.formulario.descripcion }} </v-card-subtitle>

    <v-card-actions>
      <v-btn color="primary" @click="() => handleClick(form)"> Ver </v-btn>
    </v-card-actions>
  </v-card>
</template>
