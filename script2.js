// + "/reviews" 
    //    api_key = "?api_key=4694567a42a4950589090a37a9729f3f";
const vm = new Vue({
    el: '#app2',
    data: {
        content: '',
        movieId: ''
    },
    methods: {
        getMovies2: function () {
            fetch('https://api.themoviedb.org/3/movie/' + this.movieId + '?api_key=4694567a42a4950589090a37a9729f3f')
                .then(response => response.json()) 
                .then(function(json){
                    this.content = json
                    console.log(json)
                })

        }
    },
    watch: {
        movieId: function (newType, oldType) {
            this.getMovies2()
        }
    }
})

// Vue.component('movie-item', {
//     props: ['data'],
//     template: '<div><h1>{{data.original_title}}</h1><p>{{data.overview}}</p><img v-bind:src="\'https://image.tmdb.org/t/p/w500//\'+ data.poster_path" ></div>'
// })