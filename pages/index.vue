<script lang="ts" setup>
import { useFormDataStore } from "@/store/formData";
import { Form } from "@/types/form";

const { forms, addSelectedForm } = useFormDataStore();

const handleShow = (data: Form) => {
  addSelectedForm(data);
  navigateTo("/show");
};
</script>

<template>
  <main>
    <v-container>
      <v-row>
        <v-col cols="4" v-for="form in forms" :key="form.formulario.name">
          <CardForm :form="form" @click="handleShow" />
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>
