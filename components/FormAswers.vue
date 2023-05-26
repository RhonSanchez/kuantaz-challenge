<script lang="ts" setup>
import { Form } from "@/types/form";
import { InputType } from "~/enums/inputType";

defineProps({
  form: {} as Form,
});
</script>
<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Pregunta</th>
        <th class="text-left">Respuesta</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="question in form.formulario.form" :key="question.question">
        <td>{{ question.question }}</td>
        <td v-if="question.type === InputType.Select">
          {{ question.response.value }}
        </td>

        <td v-else>{{ question.response }}</td>
      </tr>
    </tbody>
  </v-table>
</template>
