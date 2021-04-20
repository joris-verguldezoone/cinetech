const vm = new Vue({
    el : '#app',
    data : {
        content : '',
        movieId : ''
    },
    methods : {
        getMovies : function(){
            const vm = this
            fetch('https://api.themoviedb.org/3/movie/'+this.movieId+'?api_key=8f560fa0d81bece7dce9718dd0d51a08')
                .then(response=>response.json())
                .then(json=>vm.content = json)
        }
    },
    watch : {
        movieId: function(newType,oldType){
            this.getMovies()
        }
    }
})