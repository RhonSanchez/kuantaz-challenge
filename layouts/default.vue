<script lang="ts" setup>
const drawer = ref(false);

const updateDrawer = () => {
  drawer.value = !drawer.value;
};
</script>

<template>
  <v-card class="elevation-0 rounded-0" width="100%" height="">
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

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
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
