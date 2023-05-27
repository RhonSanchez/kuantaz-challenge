<script lang="ts" setup>
import { isRequired } from "@/services/validations";
import { Form } from "@/types/form";
defineProps({
  form: {} as Form,
});
</script>
<template>
  <v-card class="mx-auto my-8" width="100%" prepend-icon="mdi-home">
    <template v-slot:title>
      <v-text-field
        v-model="form.formulario.name"
        label="Título"
        density="compact"
        :rules="[isRequired]"
      ></v-text-field>
    </template>

    <v-card-text>
      <v-text-field
        v-model="form.formulario.descripcion"
        label="Descripción"
        density="compact"
        :rules="[isRequired]"
      ></v-text-field>
    </v-card-text>
  </v-card>
</template>
