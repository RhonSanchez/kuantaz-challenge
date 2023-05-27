<script lang="ts" setup>
import { ref } from "vue";
import { InputType } from "@/enums/inputType";
import { Form } from "@/types/form";
import { useFormDataStore } from "../store/formData";

const { addForm } = useFormDataStore();

const isLastElement = (index: number) => {
  return index === form.formulario.form.length - 1;
};
const isNotFirstElement = (index: number) => {
  return index !== 0;
};
const formValidate = ref(null);
const form = reactive({
  formulario: {
    name: "",
    descripcion: "",
    form: [
      {
        question: "",
        type: InputType.Input,
        response: "",
      },
    ],
  },
} as Form);

const AddQuestion = () => {
  form.formulario.form.push({
    question: "",
    type: InputType.Input,
    response: "",
  });
};

const deleteQuestion = () => {
  form.formulario.form.pop();
};

const validate = async () => {
  const resp = await formValidate?.value.validate();
  if (resp.valid) {
    addForm(form);
    navigateTo("/");
  }
};
</script>

<template>
  <v-form ref="formValidate">
    <div class="d-flex flex-column align-center">
      <FormTitle :form="form" />

      <div
        v-for="(question, indexQuestion) in form.formulario.form"
        :class="`d-flex ${isLastElement(indexQuestion) ? 'ml-13' : ''}`"
      >
        <FormQuestion :question="question" />
        <div class="d-flex flex-column">
          <v-btn
            v-if="
              isLastElement(indexQuestion) && isNotFirstElement(indexQuestion)
            "
            class="ma-2"
            icon="mdi-close"
            size="small"
            @click="deleteQuestion"
          ></v-btn>
          <v-btn
            v-if="isLastElement(indexQuestion)"
            class="ma-2"
            icon="mdi-plus"
            size="small"
            @click="AddQuestion"
          ></v-btn>
        </div>
      </div>
      <Btn
        class="ma-2"
        color="primary"
        size="small"
        title="Guardar"
        @click="validate"
      />
    </div>
  </v-form>
</template>
