<template>
 <v-container class="pa-4">
   <v-layout class="my-5">
     <v-flex >
        <v-container >
          <v-row>
              <v-col cols="12" xs="12" sm="6" lg="6" class="d-flex d-sm-none">
                  <img width="100%" src="./../assets/h_image.jpg" alt="logo">
              </v-col>
              <v-col cols="12" xs="12" sm="6" lg="6" >
                 <h2 class="intro-text">Welcome to our Vuetify App</h2>
                 <p class="description">lorem in website good vuetif app  responsive templetelorem in
                   website good vuetif app  responsive templete
                   lorem in website good vuetif app  responsive templete
                   </p>
                   <v-btn  color="success" class="ma-4 white--text" rounded >Get Started</v-btn>
                   <v-btn  color="indigo" class="ma-4 white--text" rounded >
                     <v-icon small> fa-play-circle-o</v-icon>
                     watch video
                     </v-btn>
               </v-col>
              <v-col   cols="12" xs="12" sm="6" lg="6" class="d-none d-sm-flex">
                  <img width="100%" src="./../assets/h_image.jpg" alt="logo">
              </v-col>
          </v-row>
        </v-container>
     </v-flex>
   </v-layout>

 </v-container>
</template>
<script>
export default {

}
</script>
<style scoped>
.intro-text {
  font-size: 60px;
  font-weight: bold;
  font-family: cursive;
  color: slateblue;
}
.description{
  font-size: 19px;
  font-family: cursive;
  margin: 32px 0px;
  color: rgb(54, 53, 61);

}

</style>
