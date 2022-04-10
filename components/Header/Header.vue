<template>
  <v-app-bar
    app
    color="white"
    elevation="6"
    elevate-on-scroll
    class="bar green--text"
  >
    <v-toolbar-title class="d-none d-sm-flex">
      <h3 class="logo-text">Web Burden</h3>
    </v-toolbar-title>
    <v-toolbar-title class="d-flex d-sm-none">
      <v-icon> fa fa-server</v-icon>
    </v-toolbar-title>
    <v-spacer />
    <v-list shaped class="d-flex align-center">
      <v-list-item
        exact
        class="d-none d-sm-none d-md-flex"
        color="primary"
        v-for="(item, index) in menus"
        :key="index"
        :to="{ name: item.route }"
      >
        <v-hover v-slot="{ hover }">
          <v-list-item-title
            @click="disable()"
            :class="{
              'on-hover': hover,
              'blue--text': hover,
              'darken-3': hover,
            }"
            >{{ item.title }}</v-list-item-title
          >
        </v-hover>
      </v-list-item>

      <v-btn
        text
        class="ml-5 d-none d-sm-none d-md-flex"
        @click="changeVisible()"
      >
        <v-text-field v-show="visible" small dense></v-text-field>

        <v-icon small>fas fa-search </v-icon>
      </v-btn>
<nuxt-link  :to="{name:'Login'}">
 <v-btn outlined color="success"> Login  </v-btn>
</nuxt-link>

    </v-list>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      menus: [
        { title: 'Home', route: 'home' },
        { title: 'About Us', route: 'about' },
        { title: 'Protofile', route: 'Protofile' },
        { title: 'Project', route: 'Project' },
        { title: 'Gallery', route: 'Gallery' },
        { title: 'Contact', route: 'Contact' },
      ],
    }
  },
  methods: {
    changeVisible: function () {
      this.visible = true
    },
    disable: function () {
      this.visible = false
    },
  },
}
</script>

<style scoped>
.bar {
  padding: 0px 20px;
}
.filed {
  width: 100px;
  height: 20px;
  size: 4px;
}
.logo-text {
  font-weight: 700;
  font-size: 18px;
  font-family: cursive;
  margin-right: 10px;
  color: rgb(64, 207, 12);
}
.link{

}
</style>
