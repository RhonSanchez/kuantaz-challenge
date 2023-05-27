<script lang="ts" setup>
import { Form } from "@/types/form";
import { useFormDataStore } from "../store/formData";

defineProps({
  form: {} as Form,
});

const emit = defineEmits(["confirm"]);

const formValidate = ref(null);
const { updateForm } = useFormDataStore();

const submitForm = async (data) => {
  const resp = await formValidate?.value.validate();
  if (resp.valid) {
    updateForm(data);
    emit("confirm");
  }
};
</script>
<template>
  <v-form ref="formValidate" class="d-flex flex-column align-center">
    <FormTitleShow :form="form" />
    <div v-for="(question, index) in form.formulario.form" :key="index">
      <FormQuestionShow :question="question" />
    </div>
    <!-- <button @click="(ev) => submitForm(ev, form)">Confirmar</button> -->
    <v-btn
      class="ma-2"
      color="primary"
      size="small"
      @click="() => submitForm(form)"
      >Confirmar</v-btn
    >
  </v-form>
</template>
