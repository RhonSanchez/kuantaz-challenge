<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useFormDataStore } from "../store/formData";
import FormGenerator from "@/components/FormGenerator.vue";

const store = useFormDataStore();
const { formSelected } = storeToRefs(store);
const tab = ref(0);
console.log(formSelected.value);
</script>

<template>
  <v-card class="elevation-0 rounded-0">
    <v-toolbar height="20px" color="primary">
      <template v-slot:extension>
        <v-tabs v-model="tab" align-tabs="title">
          <v-tab value="form"> Formulario </v-tab>
          <v-tab value="answers">Respuestas</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-window v-model="tab">
      <v-window-item value="form">
        <FormGenerator :form="formSelected" />
      </v-window-item>
      <v-window-item value="answers"
        ><FormAswers :form="formSelected"
      /></v-window-item>
    </v-window>
  </v-card>
</template>
