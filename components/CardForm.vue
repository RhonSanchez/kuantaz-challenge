<script lang="ts" setup>
import { Form } from "../types/form";
defineProps({
  form: {} as Form,
});
const show = ref(false);
</script>

<template>
  <v-card class="mx-auto">
    <v-img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQydgC2morWjLXJrIBDKSxO-YyQWJYnX5FYGQ"
      cover
    ></v-img>

    <v-card-title> {{ form.formulario.name }} </v-card-title>

    <v-card-actions>
      <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text> {{ form.formulario.descripcion }} </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
