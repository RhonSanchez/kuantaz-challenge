import { InputType } from "@/enums/inputType";

export interface Form {
  formulario: Formulario;
}

export interface Formulario {
  name: string;
  descripcion: string;
  form: Question[];
}

export interface Question {
  question: string;
  type: InputType;
  items?: Array<ItemClass | string>;
  response: ItemClass | string | Array<ItemClass | string>;
}

export interface ItemClass {
  id: number;
  value: string;
}
