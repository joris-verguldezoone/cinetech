const vm = new Vue({
    el : '#app',
    data : {
        content : '',
        movieId : ''
    },
    methods : {
        getMovies : function(){
            fetch('https://api.themoviedb.org/3/movie/'+this.movieId+'?api_key=8f560fa0d81bece7dce9718dd0d51a08')
                .then(response=>response.json())
                .then(json=>this.content = json)
        }
    },
    watch : {
        movieId: function(newType,oldType){
            this.getMovies()
        }
    }
})

Vue.component('movie-item',{
    props: ['data'],
    template: '<div><h1>{{data.original_title}}</h1><p>{{data.overview}}</p><img v-bind:src="\'https://image.tmdb.org/t/p/w500//\'+ data.poster_path" ></div>'
})