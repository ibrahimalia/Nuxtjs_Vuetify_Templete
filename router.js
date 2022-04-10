import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
const page = path =>()=>import(`~/pages/${path}`).then(result=>result.default || result);

const routes = [
  {
    path:"/",
    name:"home",
    component:page('home.vue'),
  },
  {
    path:"/about",
    name:"about",
    component:page('about.vue'),
  },
  {
    path:"/Protofile",
    name:"Protofile",
    component:page('Protofile.vue'),
  },
  {
    path:"/Project",
    name:"Project",
    component:page('Project.vue'),
  },
  {
    path:"/Gallery",
    name:"Gallery",
    component:page('Gallery.vue'),
  },
  {
    path:"/Contact",
    name:"Contact",
    component:page('Contact.vue'),
  },
  {
    path:"/login",
    name:"Login",
    component:page('login.vue'),
  },
  {
    path:"/admin",
    name:"Admin",
    component:page('admin.vue'),
  },
];
export function createRouter(){
  return new Router({
    routes,
    mode:'history'
  });
};

