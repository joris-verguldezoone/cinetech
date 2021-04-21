// + "/reviews" 
    //    api_key = "?api_key=4694567a42a4950589090a37a9729f3f";
    const vm = new Vue({
        el: '#app2',
        data: {
            content: '',
            movieId: ''
        },
        methods: 
        {
            getMovies2: function () {
                fetch('https://api.themoviedb.org/3/movie/' + this.movieId + '/reviews?api_key=8f560fa0d81bece7dce9718dd0d51a08')
                    .then(response => response.json()) 
                    .then(json => {this.content = json
                        console.log(json)
                        // console.log(json.results.length)
                    })
            }
        },
        watch: { // event listener 
            movieId: function (newType, oldType) {
                this.getMovies2()
            }
        }
    })
    
    // Vue.component('movie-item', {
    //     props: ['data'],
        
    //     template:



      




    //     // '<div><h1>{{data.results[0].author}}</h1><p>{{data.results[0].content}}</p><img v-bind:src="data.results[0].author_details.avatar_path" ><p>{{data.results[0].author_details.rating}}</p></div>'
    //     // v-bind essentiel pour src
    // })