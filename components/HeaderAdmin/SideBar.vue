<template>
<v-navigation-drawer v-model="drawer" app dark color="#323850" mini-variant mini-variant-width="110">
  <v-avatar class="d-flex text-center mx-auto mt-4 border_img" size="40">
     <img src="./../../assets/about1.jpg">
  </v-avatar>
  <v-list flat class="mt-5">
    <v-list-item-group v-model="selectItem">
      <v-list-item v-for="(item,index) in items" :key="index" active-class="border" v-slot="{active}" :ripple="false">
        <v-list-item-icon class="pl-2" :class="active?'border-list':''" >

          <v-icon v-text="item.icon" :color="active ? '#76FF03':'grey'"></v-icon>
        </v-list-item-icon>

      </v-list-item>

    </v-list-item-group>
  </v-list>
</v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      selectItem:3,
      drawer : null,
      items:[
        {icon:"fa fa-bars"},
        {icon:"far fa-user-circle"},
        {icon:"fas fa-suitcase"},
        {icon:"fas fa-users-cog"},
        {icon:"far fa-user-circle"},
        {icon:"fa fa-calendar"}
      ]
    }
  },
}
</script>

<style scoped>
 .border-list{
   border-left: 2px solid greenyellow;
 }
 .border_img{
   border: 1px solid grey;
 }
 .border{
   text-decoration: none;

 }

</style>
