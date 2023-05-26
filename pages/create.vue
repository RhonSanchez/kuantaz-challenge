<script lang="ts" setup>
import { ref } from "vue";
import { InputType } from "@/enums/inputType";
import { Form } from "@/types/form.ts";

const items = ref([
  {
    value: InputType.Text,
    text: "Respuesta corta",
  },
  {
    value: InputType.Textarea,
    text: "Respuesta Larga",
  },
  {
    value: InputType.Select,
    text: "Desplegable",
  },
  {
    value: InputType.Radio,
    text: "Varias opciones",
  },
  {
    value: InputType.Checkbox,
    text: "Casillas",
  },
]);
const formValidate = ref(null);
const NEW_QUESTION = {
  question: "",
  type: InputType.Text,
  response: "",
};
const form = reactive({
  formulario: {
    name: "",
    descripcion: "",
    form: [
      {
        question: "",
        type: InputType.Text,
        response: "",
      },
    ],
  },
} as Form);

const AddQuestion = () => {
  form.formulario.form.push(NEW_QUESTION);
};

const deleteQuestion = () => {
  form.formulario.form.pop();
};

const reset = () => {
  formValidate?.value.reset();
};
const resetValidation = () => {
  formValidate?.value.resetValidation();
};

const validate = () => {
  formValidate?.value.validate();
};
</script>

<template>
  <v-form ref="formValidate">
    <div class="d-flex flex-column align-center">
      <v-card width="400">
        <v-text-field
          v-model="form.formulario.name"
          label="Título"
          variant="outlined"
          density="compact"
          :rules="[(v) => !!v || 'Es requerido']"
        ></v-text-field>
        <v-text-field
          v-model="form.formulario.descripcion"
          label="Descripción"
          variant="outlined"
          density="compact"
          :rules="[(v) => !!v || 'Es requerido']"
        ></v-text-field>
      </v-card>
      <div
        :class="`d-flex ${
          indexQuestion == form.formulario.form.length - 1 ? 'ml-13' : ''
        }`"
        v-for="(question, indexQuestion) in form.formulario.form"
      >
        <v-card width="400">
          <v-text-field
            v-model="question.question"
            label="Pregunta"
            variant="outlined"
            :rules="[(v) => !!v || 'Es requerido']"
          ></v-text-field>
          <v-select
            v-model="question.type"
            :items="items"
            density="comfortable"
            item-title="text"
            item-value="value"
            @update:modelValue="
              () => {
                if (question.type === InputType.Select) {
                  if (question.items?.length > 0) {
                    const oldData = question.items;
                    oldData?.map((item, index) => {
                      question.items?.push({ id: index, value: item });
                    });
                  } else {
                    question.items = [{ id: 1, value: '' }];
                  }
                } else if (
                  question.type === InputType.Radio ||
                  question.type === InputType.Checkbox
                ) {
                  if (question.items?.length > 0 && question.items[0].id) {
                    const oldData = question.items;
                    question.items = oldData?.map((item) => {
                      return item.value;
                    });
                  } else if (question.items?.length === 0) {
                    question.items = [''];
                  } else {
                  }
                } else {
                  delete question.items;
                }
              }
            "
          ></v-select>

          <div
            v-if="
              question.type === InputType.Text ||
              question.type === InputType.Textarea
            "
          >
            <v-text-field
              :label="items.find((i) => i.value === question.type)?.text"
              hide-details="auto"
              variant="outlined"
              density="compact"
              disabled
            ></v-text-field>
          </div>
          <div v-if="question.type === InputType.Select">
            <div>
              <div
                class="d-flex flex-wrap align-center"
                v-for="item in question.items"
              >
                <v-text-field
                  :label="`Opción ${item.id}`"
                  v-model="item.value"
                  density="compact"
                  :rules="[(v) => !!v || 'Es requerido']"
                ></v-text-field>
                <v-btn
                  v-if="item.id === question.items?.length && item.id !== 1"
                  class="elevation-0 mb-2 mx-2"
                  icon="mdi-close"
                  @click="question.items?.pop()"
                ></v-btn>
              </div>
              <v-text-field
                label="Añadir otra opcioón"
                density="compact"
                readonly
                @mousedown:control="
                  () => {
                    question.items?.push({
                      id: question.items.length + 1,
                      value: '',
                    });
                  }
                "
              ></v-text-field>
            </div>
          </div>
          <div
            v-if="
              question.type === InputType.Radio ||
              question.type === InputType.Checkbox
            "
          >
            <div>
              <div
                class="d-flex flex-wrap align-center"
                v-for="(item, index) in question.items.length"
                :key="index"
              >
                <v-text-field
                  v-model="question.items[index]"
                  :label="`Opción ${index}`"
                  density="compact"
                  :rules="[(v) => !!v || 'Es requerido']"
                  @change="(ev) => (question.items[index] = ev.target.value)"
                ></v-text-field>
                <v-btn
                  v-if="index === question.items?.length && index !== 1"
                  class="elevation-0 mb-2 mx-2"
                  icon="mdi-close"
                  @click="question.items?.pop()"
                ></v-btn>
              </div>
              <v-text-field
                label="Añadir otra opcioón"
                density="compact"
                readonly
                @mousedown:control="
                  () => {
                    question.items?.push('');
                  }
                "
              ></v-text-field>
            </div>
          </div>
        </v-card>
        <div class="d-flex flex-column">
          <v-btn
            v-if="
              indexQuestion === form.formulario.form.length - 1 &&
              indexQuestion !== 0
            "
            class="ma-2"
            icon="mdi-close"
            size="small"
            @click="deleteQuestion"
          ></v-btn>
          <v-btn
            v-if="indexQuestion === form.formulario.form.length - 1"
            class="ma-2"
            icon="mdi-plus"
            size="small"
            @click="AddQuestion"
          ></v-btn>
        </div>
      </div>
      <v-btn class="ma-2" size="small" @click="validate">Guardar</v-btn>

      <div>{{ form }}</div>
    </div>
  </v-form>
</template>
