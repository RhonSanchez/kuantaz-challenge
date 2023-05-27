<script lang="ts" setup>
import { isRequired } from "@/services/validations";
import { Question } from "@/types/form";
import { InputType } from "@/enums/inputType";
defineProps({
  question: {} as Question,
});
</script>
<template>
  <v-card class="mx-auto mb-8" width="100%">
    <template v-slot:title>
      {{ question.question }}
    </template>

    <v-card-text>
      <div v-if="question.type === InputType.Input">
        <v-text-field
          v-model="question.response"
          :label="question.question"
          density="compact"
          :rules="[isRequired]"
        ></v-text-field>
      </div>
      <div v-else-if="question.type === InputType.Select">
        <v-select
          v-model="question.response"
          :items="question.items"
          item-title="value"
          item-value="id"
          density="compact"
          return-object
          :rules="[isRequired]"
        ></v-select>
      </div>

      <div v-else-if="question.type === InputType.Checkbox">
        <v-checkbox
          v-for="(item, itemIndex) in question.items"
          :key="itemIndex"
          v-model="question.response"
          :label="item"
          :value="item"
          :rules="[isRequired]"
        ></v-checkbox>
      </div>
      <div v-else-if="question.type === InputType.Radio">
        <v-radio-group v-model="question.response">
          <v-radio
            v-for="(item, itemIndex) in question.items"
            :key="itemIndex"
            :label="item"
            :value="item"
            :rules="[isRequired]"
          ></v-radio>
        </v-radio-group>
      </div>
    </v-card-text>
  </v-card>
</template>
