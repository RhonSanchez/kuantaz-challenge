import { InputType } from "@/enums/inputType";

export interface Form {
  formulario: Formulario;
}

export interface Formulario {
  name: string;
  descripcion: string;
  form: Form[];
}

export interface Form {
  question: string;
  type: InputType;
  items?: Array<ItemClass | string>;
  response: string;
}

export interface ItemClass {
  id: number;
  value: string;
}
