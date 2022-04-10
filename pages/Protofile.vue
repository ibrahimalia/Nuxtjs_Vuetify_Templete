<template>
  <v-container>
    <v-layout class="my-5 justify-center" row wrap >
      <v-flex cols="12" xs12 lg12 class="text-center">
        <v-subheader class="text-h4 justify-center my-3">Protofile</v-subheader>
        <p>lorem website lorem website beautifull go to use vuetify</p>
      </v-flex>
      <v-flex class="text-center"  xs12 sm12 md12 lg12>
          <v-chip   @click="activeProtofile = 'webapp' "  :color="activeProtofile == 'webapp' ? 'success' : ''" class="ma-2">web app</v-chip>
          <v-chip @click="activeProtofile = 'mobileapp' "  :color="activeProtofile == 'mobileapp' ? 'success' : ''" class="ma-2">mobile app</v-chip>
          <v-chip  @click="activeProtofile = 'desktopapp' " :color="activeProtofile == 'desktopapp' ? 'success' : ''" class="ma-2">desktop app</v-chip>
      </v-flex>
      <v-flex xs6 sm4 md4 v-show="activeProtofile == 'webapp'"  class="ma-5" lg3 v-for="(item, index) in webapp" :key="index">
        <v-card  max-width="300">
          <v-img
            class="align-end purple--text"
            :src="item.url"
            height="200px"
          >
          <v-card-title> Top western road trips </v-card-title>

          <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
          </v-img>
        </v-card>
      </v-flex>
      <v-flex xs6 sm4 md4 v-show="activeProtofile == 'mobileapp'"  class="ma-5" lg3 v-for="(item, index) in mobileapp" :key="index">
        <v-card  max-width="300">
          <v-img
            class="align-end white--text"
            :src="item.url"
            height="200px"
          >
          <v-card-title> Top western road trips </v-card-title>

          <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
          </v-img>
        </v-card>
      </v-flex>
      <v-flex xs6 sm4 md4 v-show="activeProtofile == 'desktopapp'"  class="ma-5" lg3 v-for="(item, index) in desktopapp" :key="index">
        <v-card  max-width="300">
          <v-img
            class="align-end white--text"
            :src="item.url"
            height="200px"
          >
          <v-card-title> Top western road trips </v-card-title>

          <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
          </v-img>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {

      activeProtofile:'webapp',
      webapp:[
        { title: 'web app 1 ', url: require('./../assets/about-us.jpg')},
        { title: 'web app 2 ', url: require('./../assets/about-us.jpg')},
        { title: 'web app 2 ', url: require('./../assets/about-us.jpg')},
        { title: 'web app 2 ', url: require('./../assets/about-us.jpg')},

      ],
      mobileapp:[
        { title: 'web app 1 ', url: require('./../assets/about1.jpg')},
        { title: 'web app 2 ', url: require('./../assets/about1.jpg')},
        { title: 'web app 2 ', url: require('./../assets/about1.jpg')},

      ],
      desktopapp:[
        { title: 'web app 1 ', url: require('./../assets/about2.png')},
        { title: 'web app 2 ', url: require('./../assets/about2.png')},
        { title: 'web app 2 ', url: require('./../assets/about2.png')},
        { title: 'web app 2 ', url: require('./../assets/about2.png')},
        { title: 'web app 2 ', url: require('./../assets/about2.png')},
        { title: 'web app 2 ', url: require('./../assets/about2.png')},
      ]

    }
  },
}
</script>

<style>
</style>
