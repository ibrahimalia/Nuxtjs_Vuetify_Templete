<template>
  <div>
    <v-row>
      <v-col  cols="12" sm="12">
        <v-app-bar  dense dark flat color="#2A3243">
          <v-tabs   center-active color="#76FF03" v-model="tab">
            <v-tabs-slider color="#76FF03"></v-tabs-slider>
            <v-tab class="withoutUpperCase" v-for="(tab, i) in tabs" :key="i">
              {{ tab }}
            </v-tab>
          </v-tabs>
        </v-app-bar>
      </v-col>
    </v-row>

    <v-card tile flat color="#2A3243" class="my-4">
      <v-row>
        <v-col cols="12" sm="8">
          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-card flat color="#2A3243" class="pa-2">
                <v-row>
                  <v-col cols="12" sm="3" v-for="(item, i) in Parasut" :key="i">
                    <v-hover v-slot="{ hover }" close-delay="200">
                      <v-card
                        flat
                        :elevation="hover ? 16 : 2"
                        :class="{ 'on-hover': hover }"
                        class="mx-auto"
                        height="250"
                        tile
                        color="#2A3243"
                        align="center"
                      >
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            tile
                            small
                            :color="hover ? 'pink' : 'grey'"
                            dark
                          >
                            {{ item.prix }}
                          </v-btn>
                        </v-card-actions>
                        <v-img :src="item.url" width="150" height="150"></v-img>
                        <v-card-text
                          :class="hover ? 'red--text' : 'white--text'"
                        >
                          {{ item.title }}
                        </v-card-text>
                      </v-card>
                    </v-hover>
                  </v-col>
                </v-row>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat color="#2A3243" class="pa-2">
                <v-row>
                  <v-col cols="12" sm="3" v-for="(item, i) in Parka" :key="i">
                    <v-hover v-slot="{ hover }" close-delay="200">
                      <v-card
                        flat
                        :elevation="hover ? 16 : 2"
                        :class="{ 'on-hover': hover }"
                        class="mx-auto"
                        height="250"
                        tile
                        color="#2A3243"
                        align="center"
                      >
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            tile
                            small
                            :color="hover ? 'pink' : 'grey'"
                            dark
                          >
                            {{ item.prix }}
                          </v-btn>
                        </v-card-actions>
                        <v-img :src="item.url" width="150" height="150"></v-img>
                        <v-card-text
                          :class="hover ? 'red--text' : 'white--text'"
                        >
                          {{ item.title }}
                        </v-card-text>
                      </v-card>
                    </v-hover>
                  </v-col>
                </v-row>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat color="#2A3243" class="pa-2">
                <v-row>
                  <v-col cols="12" sm="3" v-for="(item, i) in steve" :key="i">
                    <v-hover v-slot="{ hover }" close-delay="200">
                      <v-card
                        flat
                        :elevation="hover ? 16 : 2"
                        :class="{ 'on-hover': hover }"
                        class="mx-auto"
                        height="250"
                        tile
                        color="#2A3243"
                        align="center"
                      >
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            tile
                            small
                            :color="hover ? 'pink' : 'grey'"
                            dark
                          >
                            {{ item.prix }}
                          </v-btn>
                        </v-card-actions>
                        <v-img :src="item.url" width="150" height="150"></v-img>
                        <v-card-text
                          :class="hover ? 'red--text' : 'white--text'"
                        >
                          {{ item.title }}
                        </v-card-text>
                      </v-card>
                    </v-hover>
                  </v-col>
                </v-row>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
        <v-col cols="12" sm="4" >
          <payment/>

        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import Payment from '~/components/HomeAdmin/Payment.vue'
export default {
  components: { Payment },
  layout: 'adminLayouts',
  data() {
    return {
      tab: null,
      tabs: ['Parasut', 'Parka', 'steve'],
      Parasut: [
        {
          url: require('./../assets/h_image.jpg'),
          prix: '$586',
          title: 'style in vuetify',
        },
        {
          url: require('./../assets/about1.jpg'),
          prix: '$562',
          title: 'style in vuetify',
        },
        {
          url: require('./../assets/about2.png'),
          prix: '$536',
          title: 'style in vuetify',
        },
        {
          url: require('./../assets/about-us.jpg'),
          prix: '$556',
          title: 'style in vuetify',
        },
        {
          url: require('./../assets/about-us.jpg'),
          prix: '$556',
          title: 'style in vuetify',
        },
        {
          url: require('./../assets/about3.jpg'),
          prix: '$576',
          title: 'style in vuetify',
        },
        {
          url: require('./../assets/about3.jpg'),
          prix: '$576',
          title: 'style in vuetify',
        },
        {
          url: require('./../assets/about3.jpg'),
          prix: '$576',
          title: 'style in vuetify',
        },
      ],
      Parka: [
        {
          url: require('./../assets/h_image.jpg'),
          prix: '$56',
          title: 'style in vuetify',
        },
        {
          url: require('./../assets/h_image.jpg'),
          prix: '$56',
          title: 'style in vuetify',
        },
        {
          url: require('./../assets/h_image.jpg'),
          prix: '$56',
          title: 'style in vuetify',
        },
        {
          url: require('./../assets/h_image.jpg'),
          prix: '$56',
          title: 'style in vuetify',
        },
        {
          url: require('./../assets/about1.jpg'),
          prix: '$564',
          title: 'style in vuetify',
        },
        {
          url: require('./../assets/about2.png'),
          prix: '$523',
          title: 'style in vuetify',
        },
        {
          url: require('./../assets/about-us.jpg'),
          prix: '$346',
          title: 'style in vuetify',
        },
        {
          url: require('./../assets/about3.jpg'),
          prix: '$23',
          title: 'style in vuetify',
        },
      ],
      steve: [
        {
          url: require('./../assets/h_image.jpg'),
          prix: '$656',
          title: 'style in vuetify',
        },
        {
          url: require('./../assets/h_image.jpg'),
          prix: '$656',
          title: 'style in vuetify',
        },
        {
          url: require('./../assets/about1.jpg'),
          prix: '$576',
          title: 'style in vuetify',
        },
        {
          url: require('./../assets/about1.jpg'),
          prix: '$576',
          title: 'style in vuetify',
        },
        {
          url: require('./../assets/about1.jpg'),
          prix: '$576',
          title: 'style in vuetify',
        },
        {
          url: require('./../assets/about2.png'),
          prix: '$586',
          title: 'style in vuetify',
        },
        {
          url: require('./../assets/about-us.jpg'),
          prix: '$566',
          title: 'style in vuetify',
        },
        {
          url: require('./../assets/about3.jpg'),
          prix: '$346',
          title: 'style in vuetify',
        },
      ],
    }
  },
}
</script>

<style scoped>
.withoutUpperCase {
  text-transform: none !important;
}
.v-tabs {
  width: 30% !important;
}
.scroll{
  overflow-x:scroll ;
}
</style>
