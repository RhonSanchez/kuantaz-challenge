import { Form } from "~/types/form";

export const getForms = async () => {
  const resp = await fetch(
    "https://run.mocky.io/v3/6bd01347-72e9-49da-809a-d5002ca63b2c"
  );
  return await resp.json();
};

export const getValidationForms = async () => {
  const resp = window.localStorage.getItem("forms");
  if (resp) {
    return JSON.parse(resp);
  } else {
    const data = await getForms();
    return [data];
  }
};

export const getValidationSelectedForms = async () => {
  const resp = window.localStorage.getItem("formSelected");
  if (resp?.includes("formulario")) {
    return JSON.parse(resp);
  } else {
    return { formulario: {} } as Form;
  }
};
