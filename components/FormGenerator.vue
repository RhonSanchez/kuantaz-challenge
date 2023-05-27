<script lang="ts" setup>
import { Form } from "@/types/form";
import { useFormDataStore } from "../store/formData";

defineProps({
  form: {} as Form,
});
const emit = defineEmits(["confirm"]);

const formValidate = ref(null);
const { updateForm } = useFormDataStore();

const submitForm = async (data: Form) => {
  const resp = await formValidate?.value.validate();
  if (resp.valid) {
    updateForm(data);
    emit("confirm");
  }
};
</script>
<template>
  <v-form
    ref="formValidate"
    class="d-flex flex-column align-center form-validate"
  >
    <FormTitleShow :form="form" />
    <div
      v-for="(question, index) in form?.formulario?.form"
      :key="index"
      class="form-validate"
    >
      <FormQuestionShow :question="question" />
    </div>
    <Btn
      class="ma-2"
      color="primary"
      size="small"
      title="Confirmar"
      @click="() => submitForm(form)"
    />
  </v-form>
</template>
<style scoped>
.form-validate {
  width: 100%;
}
</style>
