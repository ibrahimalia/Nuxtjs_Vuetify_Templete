<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
         <v-card class="elevation-6 mt-10">
           <v-window v-model="step">
             <!-- Login Form -->
             <v-window-item :value="1">
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-card-text class="mt-12">
                      <h4 class="text-center">Login in to your account</h4>
                       <h6 class="text-center grey--text"> Login in to your account so you can building
                         <br>
                         and editing your onboarding flows
                       </h6>
                       <v-row align="center" justify="center">
                         <v-col cols="12" sm="8">
                           <v-text-field label="Email" outlined dense color="blue" autocomplete="true" class="mt-4"></v-text-field>
                           <v-text-field label="Password" outlined dense color="blue" autocomplete="true" type="Password"></v-text-field>
                           <v-row>
                             <v-col cols="12" sm="7">
                               <v-checkbox color="blue" class="mt-n1" label="Remember Me"></v-checkbox>
                             </v-col>
                             <v-col cols="12"  sm="5">
                               <span class="caption blue-text ">
                                 Forget Password
                               </span>
                             </v-col>

                           </v-row>
                           <v-btn color="blue" dark block tile>Login In</v-btn>
                           <h5 class="text-center grey--text mt-4 mb-4"> Or login using</h5>
                           <div class="d-flex justify-lg-space-between align-center justify-center mx-10 mb-16">
                             <v-btn depressed outlined color="grey">
                               <v-icon color="red">fab fa-google</v-icon>
                             </v-btn>
                             <v-btn depressed outlined color="grey">
                               <v-icon color="blue">fa fa-facebook-square</v-icon>
                             </v-btn>
                             <v-btn depressed outlined color="grey">
                               <v-icon color="green">fa fa-github</v-icon>
                             </v-btn>
                           </div>
                         </v-col>
                       </v-row>
                    </v-card-text>
                  </v-col>
                  <v-col cols="12" sm="6" class="blue rounded-bl-xl">
                    <div style="text-align:center; padding:180px 0px ">
                      <v-card-text class="white--text">
                        <h3 class="text-center">Don't Have an Account Yet ?</h3>
                        <h6 class="text-center">
                          Let's get  you all set up so you can start so you can start <br>
                          Let's get  you all set up so
                        </h6>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn tile outlined dark @click="step++">Sign Up</v-btn>
                      </div>
                    </div>
                  </v-col>
                </v-row>
             </v-window-item>
             <!-- register Form  -->
             <v-window-item :value="2">
               <v-row>
               <v-col cols="12" sm="6" class="blue rounded-br-xl">
                 <div style="text-align:center; padding:180px 0px" >
                   <v-card-text class="white--text">
                    <h3 class="text-center">Don't Have an Account Yet ?</h3>
                        <h6 class="text-center">
                          Let's get  you all set up so you can start so you can start <br>
                          Let's get  you all set up so
                        </h6>
                   </v-card-text>
                    <div class="text-center">
                        <v-btn tile outlined dark @click="step--">Sign In</v-btn>
                      </div>
                 </div>
               </v-col>
               <v-col cols="12" sm="6" >
                 <v-card-text class="mt-12">
                    <h4 class="text-center"> Sign Up to your account</h4>
                    <h6 class="text-center grey--text">
                      Login in to your account so you can building
                      <br>
                      and editing your onboarding flows
                    </h6>
                    <v-row align="center" justify="center">
                       <v-col cols="12" sm="8">
                           <v-row >
                             <v-col cols="12" sm="6">
                                <v-text-field label="First Name" outlined dense color="blue" autocomplete="true" class="mt-4"></v-text-field>
                             </v-col>
                             <v-col cols="12" sm="6">
                                <v-text-field label="Last Name" outlined dense color="blue" autocomplete="true" class="mt-4"></v-text-field>
                             </v-col>

                           </v-row>
                            <v-text-field label="Email" outlined dense color="blue" autocomplete="true" ></v-text-field>
                            <v-text-field label="Password" outlined dense color="blue" autocomplete="true" type="Password"></v-text-field>
                            <v-row>
                            <v-col cols="12" sm="7" >
                               <v-checkbox color="blue" class="mt-n1" label="Remember Me"></v-checkbox>
                            </v-col>
                            <v-col cols="12" sm="5" >
                              <span class="caption blue-text">
                                terms&conditions
                               </span>
                            </v-col>
                            </v-row>
                            <v-btn class="blue" dark block tile>Sign Up</v-btn>
                            <h5 class="text-center grey--text mt-4 mb-3">or sign up using</h5>
                            <div class="d-flex justify-lg-space-between align-center justify-center mx-10 mb-16">
                               <v-btn depressed outlined color="grey">
                               <v-icon color="red">fab fa-google</v-icon>
                             </v-btn>
                             <v-btn depressed outlined color="grey">
                               <v-icon color="blue">fa fa-facebook-square</v-icon>
                             </v-btn>
                             <v-btn depressed outlined color="grey">
                               <v-icon color="green">fa fa-github</v-icon>
                             </v-btn>
                             </div>
                       </v-col>
                    </v-row>
                 </v-card-text>
               </v-col>
               </v-row>
             </v-window-item>
           </v-window>
         </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
 data() {
   return {
     step : 1
   }
 },
}
</script>

<style scoped>
.rounded-bl-xl{
  border-bottom-left-radius:300px !important ;
}
.rounded-br-xl{
  border-bottom-right-radius:300px  !important ;
}

</style>


