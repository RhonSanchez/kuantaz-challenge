<script lang="ts" setup>
import { Form } from "../types/form";
defineProps({
  form: {} as Form,
});
const emit = defineEmits(["click"]);
const show = ref(false);

function handleClick(data: Form) {
  emit("click", data);
}
</script>

<template>
  <v-card class="mx-auto">
    <v-img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQydgC2morWjLXJrIBDKSxO-YyQWJYnX5FYGQ"
      cover
    ></v-img>

    <v-card-title> {{ form.formulario.name }} </v-card-title>
    <v-card-subtitle> {{ form.formulario.description }} </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange-lighten-2"
        variant="text"
        @click="() => handleClick(form)"
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
