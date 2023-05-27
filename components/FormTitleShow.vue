<script lang="ts" setup>
import { Form } from "@/types/form";
defineProps({
  form: {} as Form,
});
</script>
<template>
  <v-card class="mx-auto my-8" width="400" prepend-icon="mdi-home">
    <template v-slot:title>
      {{ form.formulario.name }}
    </template>

    <v-card-text>
      {{ form.formulario.descripcion }}
    </v-card-text>
  </v-card>
</template>
