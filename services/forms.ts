export const getForms = async () => {
  const resp = await fetch(
    "https://run.mocky.io/v3/6bd01347-72e9-49da-809a-d5002ca63b2c"
  );
  console.log(resp);
  return await resp.json();
};

export const getValidationForms = async () => {
  const resp = window.localStorage.getItem("forms");
  console.log(resp);
  if (resp) {
    console.log("si entro");
    return JSON.parse(resp);
  } else {
    const data = await getForms();
    return [data];
  }
};
