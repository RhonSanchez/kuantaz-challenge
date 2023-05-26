import { defineStore } from "pinia";
import { Form } from "@/types/form";
import { getValidationForms } from "~/services/forms";

export const useFormDataStore = defineStore("formData", () => {
  const forms = reactive([] as Form[]);
  const formSelected = reactive({} as Form);

  async function getForms() {
    const resp = await getValidationForms();
    forms.splice(0);
    forms.push(...resp);
    localStorage.setItem("forms", JSON.stringify(forms));
  }

  function addForm(data: Form) {
    forms.push(data);
    localStorage.setItem("forms", JSON.stringify(forms));
  }

  function updateForm(data: Form) {
    console.log(data);
    const indexElement = forms.findIndex(
      (f) => f.formulario.name === data.formulario.name
    );
    forms.splice(indexElement, 1, data);
    localStorage.setItem("forms", JSON.stringify(forms));
  }

  function addSelectedForm(data: Form) {
    formSelected.formulario = data.formulario;
    console.log(formSelected);
  }

  return {
    forms,
    formSelected,
    getForms,
    addForm,
    updateForm,
    addSelectedForm,
  };
});
