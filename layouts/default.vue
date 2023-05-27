<script lang="ts" setup>
import { useFormDataStore } from "@/store/formData";

const { getForms, getSelectedForms } = useFormDataStore();
const drawer = ref(false);

onMounted(async () => {
  await getForms();
  await getSelectedForms();
});

const updateDrawer = () => {
  drawer.value = !drawer.value;
};
</script>

<template>
  <v-card class="elevation-0 rounded-0 card-main-layout" width="100%">
    <v-layout full-height>
      <v-navigation-drawer v-model="drawer" temporary>
        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-home-account"
            title="Inicio"
            value="home"
            to="/"
            exact
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-plus"
            title="Crear Formulario"
            value="create"
            to="/create"
            exact
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-card class="elevation-0 rounded-0" width="100%" height="100%">
        <v-toolbar color="primary">
          <div @click="updateDrawer">
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </div>

          <v-toolbar-title>Forms App</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon to="/create">
            <v-icon>mdi-plus</v-icon>
            <v-tooltip activator="parent" location="bottom"
              >Crear formulario</v-tooltip
            >
          </v-btn>
        </v-toolbar>
        <slot />
      </v-card>
    </v-layout>
  </v-card>
</template>
<style scoped>
.card-main-layout {
  display: contents;
}
</style>
