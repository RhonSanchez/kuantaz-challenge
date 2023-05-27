import { defineStore } from "pinia";
import { Form } from "@/types/form";
import {
  getValidationForms,
  getValidationSelectedForms,
} from "@/services/forms";

export const useFormDataStore = defineStore("formData", () => {
  const forms = reactive([] as Form[]);
  const formSelected = reactive({} as Form);

  async function getForms() {
    const resp = await getValidationForms();
    forms.splice(0);
    forms.push(...resp);
    localStorage.setItem("forms", JSON.stringify(forms));
  }

  async function getSelectedForms() {
    const resp = await getValidationSelectedForms();
    formSelected.formulario = resp.formulario;
    localStorage.setItem("formSelected", JSON.stringify(formSelected));
  }

  function addForm(data: Form) {
    forms.push(data);
    localStorage.setItem("forms", JSON.stringify(forms));
  }

  function updateForm(data: Form) {
    const indexElement = forms.findIndex(
      (f) => f.formulario.name === data.formulario.name
    );
    forms.splice(indexElement, 1, data);
    localStorage.setItem("forms", JSON.stringify(forms));
  }

  function addSelectedForm(data: Form) {
    formSelected.formulario = data.formulario;
    localStorage.setItem("formSelected", JSON.stringify(formSelected));
  }

  return {
    forms,
    formSelected,
    getForms,
    addForm,
    updateForm,
    getSelectedForms,
    addSelectedForm,
  };
});
