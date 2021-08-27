<template>
  <v-app>
    <v-main> <router-view :key="$route.path"></router-view> </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  background-color: blue;
  color: blueviolet;
}
</style>