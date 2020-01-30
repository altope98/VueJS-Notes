import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import listaNotas from './components/listaNotas'
import tiempo from './components/tiempo'


Vue.use(VueRouter)

const routes=[
  {path:'/inicio', component: listaNotas},
  {path:'/tiempo', component: tiempo},
  {path:'*', component: listaNotas }
]

const router = new VueRouter({routes})    ///'routes':rut

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
