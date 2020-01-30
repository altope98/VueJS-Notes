import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import listaNotas from './components/listaNotas'
import listaNoticias from './components/listaNoticias'


import 'bootstrap/dist/css/bootstrap.css'
Vue.use(VueRouter)

const routes=[
  {path:'/inicio', component: listaNotas},
  {path:'/noticias', component: listaNoticias},
  {path:'*', component: listaNotas }
]

const router = new VueRouter({routes})    ///'routes':rut

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
