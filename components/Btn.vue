<script lang="ts" setup>
defineProps({
  class: "",
  color: "",
  size: "",
  title: "",
  to: "",
  icon: "",
});
const emit = defineEmits(["click"]);

function handleClick(ev: any) {
  emit("click", ev);
}
</script>
<template>
  <v-btn
    :class="class"
    :color="color"
    :size="size"
    :icon="icon"
    :to="to"
    @click="(ev) => handleClick(ev)"
  >
    {{ title }}
  </v-btn>
</template>
