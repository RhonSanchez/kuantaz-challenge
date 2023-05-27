<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useFormDataStore } from "../store/formData";
import FormGenerator from "@/components/FormGenerator.vue";

const store = useFormDataStore();
const { formSelected } = storeToRefs(store);
const tab = ref(0);
const updateTab = () => {
  tab.value = 1;
};
</script>

<template>
  <v-card class="elevation-0 rounded-0">
    <v-toolbar height="20px" color="primary" class="justify-center">
      <template v-slot:extension>
        <v-tabs v-model="tab" align-tabs="end" class="mx-auto">
          <v-tab value="form">Formulario</v-tab>
          <v-tab value="answers">Respuestas</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-window v-model="tab">
      <v-window-item value="form">
        <v-container>
          <v-row class="justify-center">
            <v-col
              cols="12"
              sm="8"
              md="6"
              class="d-flex flex-column align-center"
            >
              <FormGenerator :form="formSelected" @confirm="updateTab" />
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>
      <v-window-item value="answers"
        ><FormAswers :form="formSelected"
      /></v-window-item>
    </v-window>
  </v-card>
</template>
