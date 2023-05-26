<script lang="ts" setup>
import { Form } from "@/types/form";
import { useFormDataStore } from "../store/formData";

defineProps({
  form: {} as Form,
});

const formValidate = ref(null);
const { updateForm } = useFormDataStore();

const submitForm = async (ev, data) => {
  ev.preventDefault();
  console.log(data);
  const resp = await formValidate?.value.validate();
  // console.log(resp.valid);
  if (resp.valid) {
    console.log("validado", data);
    updateForm(data);
  }
};
</script>
<template>
  <v-form ref="formValidate">
    <h2>{{ form.formulario.name }}</h2>
    <p>{{ form.formulario.descripcion }}</p>
    <form>
      <div v-for="(question, index) in form.formulario.form" :key="index">
        <label>{{ question.question }}</label>
        <div v-if="question.type === 'SELECT'">
          <v-select
            v-model="question.response"
            :items="question.items"
            item-title="value"
            item-value="id"
            return-object
            :rules="[(v) => !!v || 'Es requerido']"
          ></v-select>
        </div>
        <div v-else-if="question.type === 'INPUT'">
          <v-text-field
            v-model="question.response"
            :label="question.question"
            variant="outlined"
            density="compact"
            :rules="[(v) => !!v || 'Es requerido']"
          ></v-text-field>
        </div>
        <div v-else-if="question.type === 'CHECKBOX'">
          <v-checkbox
            v-for="(item, itemIndex) in question.items"
            :key="itemIndex"
            v-model="question.response"
            :label="item"
            :value="item"
            :rules="[(v) => !!v || 'Es requerido']"
          ></v-checkbox>
        </div>
        <div v-else-if="question.type === 'RADIO'">
          <v-radio-group v-model="question.response">
            <v-radio
              v-for="(item, itemIndex) in question.items"
              :key="itemIndex"
              :label="item"
              :value="item"
              :rules="[(v) => !!v || 'Es requerido']"
            ></v-radio>
          </v-radio-group>
        </div>
      </div>
      <button @click="(ev) => submitForm(ev, form)">Enviar</button>
    </form>
  </v-form>
</template>
