<!-- <template>
  <v-card class="elevation-0 rounded-0" width="100%" height="100%">
    <v-toolbar color="primary">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Your Dashboard</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
    <slot />
  </v-card>
</template> -->

<script lang="ts" setup>
const drawer = ref(false);

const updateDrawer = () => {
  drawer.value = !drawer.value;
};
</script>

<template>
  <v-card class="elevation-0 rounded-0" width="100%" height="100vh">
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
      <!-- <v-main style="height: 250px">
        <div class="d-flex justify-center align-center h-100">
          <v-btn color="primary" @click.stop="updateDrawer"> Toggle </v-btn>
        </div>
      </v-main> -->
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
        </v-toolbar>
        <slot />
      </v-card>
    </v-layout>
  </v-card>
</template>
