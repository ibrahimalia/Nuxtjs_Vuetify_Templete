<template>
  <v-app :style="{background: $vuetify.theme.themes.dark.background}">
    <side-bar/>
    <nav-bar/>

  <v-main>
 <v-container fluid>
      <Nuxt/>
 </v-container>
  </v-main>
</v-app>
</template>

<script>
import SideBar from '~/components/HeaderAdmin/SideBar.vue'
import NavBar from '~/components/HeaderAdmin/NavBar.vue'
export default {
  components: { SideBar,NavBar },

}
</script>

<style>

</style>
