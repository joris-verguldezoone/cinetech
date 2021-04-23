var baseLink = "https://api.themoviedb.org/3/movie/";
var api_key = "?api_key=4694567a42a4950589090a37a9729f3f";

const vm = new Vue({
    el: '#actorResume',
    data: {
        content: '',
        movieId: ''
    },
    methods: {
        getActor: function () {
            fetch(baseLink + this.movieId + '/credits' + api_key)
                .then(response => response.json())
                .then(json => {
                    this.content = json.cast
                    console.log(json)
                })
        }
    },
    watch: {
        movieId: function (newType, oldType) { // facultatif si j'my un submit
            this.getActor()
        }
    }
})

Vue.component('movie-actor', {
    props: ['result'],
    methods: {
        debug() { // call in template {{debug()}}
            console.log(this.result)

        }
        // img_actor() {
        // // return this.result.author_details.avatar_path.substring(1)

        // var test = 'https://image.tmdb.org/t/p/w500//' + this.result.profile_path
        // if (test === null) { // DEFAULT_USER_SKIN
        //     return test = 'https://static.wixstatic.com/media/109580_c3da31ed06484c7e8e225c46beecd507~mv2.png/v1/fill/w_220,h_220,al_c,q_85,usm_0.66_1.00_0.01/avatar%20neutre.webp'
        // } else {
        //     return test = this.result.profile_path

        // }
    },
    template: `<div><h1>{{result.character}}</h1><p>{{result.name}}</p><img v-bind:src="\'https://image.tmdb.org/t/p/w500//\'+ result.profile_path"></div>`
})
