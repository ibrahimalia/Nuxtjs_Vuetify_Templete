<template>
  <v-row class="my-5 justify-center">
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" class="text-center">
        <v-subheader class="text-h4 justify-center">Gallery</v-subheader>
        <p>lorem website lorem website beautifull go to use vuetify</p>
      </v-col>
     <v-col
      v-for="n in 9"
      :key="n"
      class="d-flex child-flex"
      cols="3"
    >
      <v-img
        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
        aspect-ratio="1"
        class="grey lighten-2"
        width="100"
        height="200"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {

}
</script>

<style>

</style>
