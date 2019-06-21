import Vue from '../node_modules/vue/dist/vue.min.js'
import VueRouter from '../node_modules/vue-router/dist/vue-router.min.js'

import Header from './header.js';
import Footer from './footer.js';
import Home from './home.js';
import Contatti from './contatti.js';

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
      { path: '/', component: Home },
      { path: '/contatti', component: Contatti },
    ]
  })

document.addEventListener('DOMContentLoaded', () => {
    
    new Vue({
        router: router,
        components: {
            app_header: Header,
            app_footer: Footer
        }
    }).$mount('#app')

})