<template>
  <v-container>
    <v-row class="my-5 justify-center">
      <v-col cols="12" xs="12" sm="12" md="12" lg="12" class="text-center">
        <v-subheader class="text-h4 justify-center">Project</v-subheader>
        <p>lorem website lorem website beautifull go to use vuetify</p>
      </v-col>
      <v-col lg="3" v-for="(item,index) in 6" :key="index" >
        <v-card class="mx-auto" max-width="300">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>Top 10 Australian beaches</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>
           <v-divider class="mx-4"></v-divider>
          <v-card-actions>
            <v-btn class="success" color="white" rounded text> view details </v-btn>
             <v-spacer></v-spacer>
             <v-rating
              size="14"
              :value="index + 0.5"
              color="amber"
              dense
              half-increments
              readonly
             >

             </v-rating>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style>
</style>
