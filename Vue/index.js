const urlApiBase = 'https://api.themoviedb.org/3'
const urlMovPop = '/discover/movie'
const apiKey = '?api_key=8f560fa0d81bece7dce9718dd0d51a08'
const filter = '&sort_by=popularity.desc'

const vm = new Vue({
    el : '#app',
    data : {
        results : '',
        movieId : ''
    },
    methods : {
        getMovies : function(){
            fetch(urlApiBase+urlMovPop+apiKey+filter)
                .then(response=>response.json())
                .then(json=>this.results = json.results)
        }
    },
    mounted() {
        this.getMovies()
    }
})

Vue.component('movie-item',{
    props: ['data'],
    template: `
        <div>
            <img v-bind:src="\'https://image.tmdb.org/t/p/w500//\'+ data.poster_path" >
            <article>
                <h3>{{data.original_title}}</h3>
                <p>{{data.overview}}</p>
            </article>
        </div>`
})