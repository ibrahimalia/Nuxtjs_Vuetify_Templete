<template>
  <v-card flat class="card_item pa-2 mt-3 transparent" elevation="2">
    <v-list subheader two-line color="transparent">
     <v-list-item>
       <v-list-item-avatar size="50px">
         <v-icon class="blue-grey darken-2" dark>fa fa-user</v-icon>
       </v-list-item-avatar>
       <v-list-item-content>
         <v-list-item-title class="white--text">Unkown Customer </v-list-item-title>
         <v-list-item-subtitle class="grey--text mt-2">Tab add to customer add</v-list-item-subtitle>
       </v-list-item-content>
     </v-list-item>
    </v-list>
    <v-tabs center-active color="light-green" class="" background-color="transparent" v-model="tab" dark grow>
      <v-tabs-slider color="light-green"></v-tabs-slider>
      <v-tab v-for="(item,index) in tabs" :key="index">
        {{item}}
      </v-tab>
    </v-tabs>
      <v-divider class=" grey" ></v-divider>
      <v-tabs-items class="transparent" v-model="tab">
        <v-tab-item >
           <v-list subheader two-line color="#2A3243" >
             <v-list-item>
               <v-list-item-content>
                 <v-list-item-title> Brown Causal red </v-list-item-title>
                 <v-list-item-subtitle>Shoes</v-list-item-subtitle>
               </v-list-item-content>
               <v-list-item-content >
                 <v-list-item-subtitle >1</v-list-item-subtitle>
               </v-list-item-content>
               <v-list-item-action>
                  <v-list-item-title>$45</v-list-item-title>
               </v-list-item-action>
             </v-list-item>
             <div class="text-right mt-6 mb-6">
               <v-btn text color="pink">Delete </v-btn>
               <v-btn  text color="pink" > Add</v-btn>

             </div>
           </v-list>
        </v-tab-item>
        <v-tab-item>
           <v-list subheader two-line color="#2A3243" >
             <v-list-item>
               <v-list-item-content>
                 <v-list-item-title> Brown Causal red </v-list-item-title>
                 <v-list-item-subtitle>Shoes</v-list-item-subtitle>
               </v-list-item-content>
               <v-list-item-content >
                 <v-list-item-subtitle class="ml-5">1</v-list-item-subtitle>
               </v-list-item-content>
               <v-list-item-action>
                  <v-list-item-title>$45</v-list-item-title>
               </v-list-item-action>
             </v-list-item>
             <div class="text-right mt-6 mb-6">
               <v-btn text color="pink">Delete </v-btn>
               <v-btn  text color="pink" > Add</v-btn>

             </div>
           </v-list>
        </v-tab-item>
      </v-tabs-items>


  </v-card>
</template>

<script>
export default {
 data() {
   return {
     tab:null,
      tabs: ['Parasut', 'Parka'],
   }
 },
}
</script>

<style scoped>
.card_item{
  border-radius: 0px !important;
}

</style>
