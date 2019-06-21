import Vue from '../node_modules/vue/dist/vue.min.js'
import Header from './header.vue'

document.addEventListener('DOMContentLoaded', () => {
    
    console.log('loaded')
    
    new Vue({
        el: '#app',
        components: { 
            app_header: Header
        }
    })

})