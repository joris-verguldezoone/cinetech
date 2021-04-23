var baseLink = "https://api.themoviedb.org/3/movie/";
var api_key = "?api_key=4694567a42a4950589090a37a9729f3f";


const vm = new Vue({
    el: '#recommandation',
    data:{
        content: '',
        movieId: ''
    },
    methods:{
        getRecommandation: function(){
            fetch(baseLink + this.movieId + '/similar' + api_key)
            .then(response => response.json())
            .then(json =>{
                this.content = json.results
                console.log(json)
            })
        }
    },
    watch: {
        movieId: function(newType, oldType){ // facultatif si j'my un submit
            this.getRecommandation()
        }
    }
})

Vue.component('movie-item', {
    props: ['result'],
    methods: {
        debug(){
            console.log(this.result)
        }
        
    },
    template:`<div><h1>{{result.title}}</h1><p>{{result.vote_average}}</p><p>{{result.release_date}}</p><img v-bind:src="\'https://image.tmdb.org/t/p/w500//\'+ result.backdrop_path"></div>`
})
