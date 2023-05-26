<script lang="ts" setup>
const emit = defineEmits(["click"]);

function handleClick() {
  emit("click");
}
</script>

<template>
  <v-card class="mx-auto">
    <v-card-text>
      <p class="text-h4 text--primary">Nuevo Formulario</p>
      <div class="text--primary">Crea formularios dinámicos y a tu gusto.</div>
    </v-card-text>
    <v-card-actions>
      <v-btn variant="text" color="teal-accent-4" @click="handleClick">
        Emepzar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
