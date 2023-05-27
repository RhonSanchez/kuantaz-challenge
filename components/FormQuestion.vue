<script lang="ts" setup>
import { isRequired } from "@/services/validations";
import { Question } from "@/types/form";
import { InputType } from "@/enums/inputType";
defineProps({
  question: {} as Question,
});

const items = ref([
  {
    value: InputType.Input,
    text: "Respuesta corta",
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

const updateTypeQuestion = (data: Question) => {
  if (data.type === InputType.Select) {
    if (data.items?.length > 0) {
      const oldData = data.items;
      const newData = oldData?.map((item, index) => {
        return { id: index + 1, value: item };
      });
      data.items = newData;
    } else {
      data.items = [{ id: 1, value: "" }];
    }
  } else if (
    data.type === InputType.Radio ||
    data.type === InputType.Checkbox
  ) {
    if (data.items?.length > 0 && data.items[0].id) {
      const oldData = data.items;
      const newData = oldData?.map((item) => {
        return item.value;
      });
      data.items = newData;
    } else if (data.items?.length > 0 && !data.items[0].id) {
      return;
    } else {
      data.items = [""];
    }
  } else {
    delete data.items;
  }
};

const addOption = (data: Question) => {
  data.items?.push({
    id: data.items.length + 1,
    value: "",
  });
};

const deleteLastOption = (data: Question) => {
  data.items?.pop();
};

const addItemToRadioOrCheckboxControl = (data: Question) => {
  data.items?.push("");
};

const deleteOptionButtonValidation = (index: number, data: Question) => {
  return index === data.items?.length && index !== 1;
};

const updateRadioOrCheckboxButton = (
  ev: Event,
  data: Question,
  index: number
) => {
  data.items[index] = ev.target.value;
};
</script>
<template>
  <v-card class="mx-auto mb-8" width="400">
    <template v-slot:title>
      <v-text-field
        v-model="question.question"
        label="Pregunta"
        density="compact"
        :rules="[isRequired]"
      ></v-text-field>
    </template>

    <v-card-text>
      <v-select
        v-model="question.type"
        :items="items"
        density="compact"
        item-title="text"
        item-value="value"
        @update:modelValue="() => updateTypeQuestion(question)"
      ></v-select>
    </v-card-text>

    <v-card-text>
      <div v-if="question.type === InputType.Input">
        <v-text-field
          label="Respuesta corta"
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
              :rules="[isRequired]"
            ></v-text-field>
            <v-btn
              v-if="deleteOptionButtonValidation(item.id, question)"
              class="elevation-0 mb-2 mx-2"
              icon="mdi-close"
              @click="() => deleteLastOption(question)"
            ></v-btn>
          </div>
          <v-text-field
            label="Añadir otra opción"
            density="compact"
            readonly
            @mousedown:control="() => addOption(question)"
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
            v-for="(item, index) in question.items?.length"
            :key="index"
          >
            <v-text-field
              v-model="question.items[index]"
              :label="`Opción ${index + 1}`"
              density="compact"
              :rules="[isRequired]"
              @change="(ev) => updateRadioOrCheckboxButton(ev, question, index)"
            ></v-text-field>
            <v-btn
              v-if="deleteOptionButtonValidation(index + 1, question)"
              class="elevation-0 mb-2 mx-2"
              icon="mdi-close"
              @click="() => deleteLastOption(question)"
            ></v-btn>
          </div>
          <v-text-field
            label="Añadir otra opcioón"
            density="compact"
            readonly
            @mousedown:control="
              () => {
                addItemToRadioOrCheckboxControl(question);
              }
            "
          ></v-text-field>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>
