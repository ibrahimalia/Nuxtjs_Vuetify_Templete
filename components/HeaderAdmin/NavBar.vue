<template>
<v-app-bar dense app dark flat color="#323850">
  <v-tabs  center-active class="change" color="#76FF03">
    <v-tabs-slider color="#76FF03"></v-tabs-slider>
    <v-tab class="withoutUpperCase text" v-for="(tab,i) in tabs" :key="i">
      {{tab}}
    </v-tab>
  </v-tabs>
  <v-btn small color="pink">
   <v-icon>fa fa-angle-down</v-icon>
  </v-btn>
  <v-spacer></v-spacer>
  <v-divider vertical inset class="mr-4"></v-divider>
  <v-text-field label="Search" prepend-inner-icon="fa fa-search" dense class="mt-5"></v-text-field>
  <v-btn text small class="withoutUpperCase grey--text ml-3" >
    Ibrahim
    <v-icon small>fa fa-angle-down</v-icon>
  </v-btn>
</v-app-bar>
</template>

<script>
export default {
data() {
  return {
    tabs:[
      'Jackets',
      'Hats',
      'Shirt',
      'Shoes',
      'Trousers'
    ]

  }
},
}
</script>

<style scoped>
 .withoutUpperCase{
   text-transform: none !important;

 }
 .v-tabs{
   width: 30% !important;

 }
 .text{
   font-size: 11px;
   width: 10px;
   padding: 0px;
 }
 .change{
   height: 40px;
 }

</style>
