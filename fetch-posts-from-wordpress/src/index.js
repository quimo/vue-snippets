import Vue from '../node_modules/vue/dist/vue.min.js';

document.addEventListener('DOMContentLoaded', () => {
    var posts = new Vue({
        el: "#posts",
        data: {
            posts: null,
            posts_flag: {
                loading: true,
                loaded: false,
                error: false,
                reload: false
            },
            target_url: 'https://www.simonealati.it/wp-json/wp/v2/posts?per_page=8'
        },
        mounted() {
            this.get_posts();
        },
        methods: {
            get_posts() {
                fetch(this.target_url).then(response => {
                    if (response.status >= 100 && response.status < 200) console.log("Informazioni per il client");
                    if (response.status >= 300 && response.status < 399) console.log("Redirezione");
                    if (response.status >= 400 && response.status < 499) console.log("Richiesta errata");
                    if (response.status >= 500 && response.status < 599) console.log("Errore sul server");
                    if (response.ok) return response.json();
                })
                .then(posts => {
                    this.posts = posts;
                    this.posts_flag = {
                        loading: false,
                        loaded: true,
                        reload: true
                    }
                    if (posts) console.log(posts);
                })
                .catch(() => {
                    this.posts_flag.error = true;
                });
            }
        },
    });             
});