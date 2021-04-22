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
                .then(json => {
                    this.content = json.results
                    console.log(json)
           })
        }
    },
    watch: { // event listener 
        movieId: function (newType, oldType) {
            this.getMovies2()
        }
    }
})
// meme façon de coder , la différence ici c'est props et template, il faut lui passer l'information chez props
Vue.component('movie-item', {
    props: ['result'],

    methods: {
        debug() {
            // console.log(JSON.parse(JSON.stringify(this.result.author_details)).avatar_path)
            console.log(this.result.author_details.avatar_path)
        },
        img_avatar() {
            // return this.result.author_details.avatar_path.substring(1)

            var test = this.result.author_details.avatar_path
            if(test === null){ // DEFAULT_USER_SKIN
                return test = 'https://static.wixstatic.com/media/109580_c3da31ed06484c7e8e225c46beecd507~mv2.png/v1/fill/w_220,h_220,al_c,q_85,usm_0.66_1.00_0.01/avatar%20neutre.webp'
            }else{
              return test = this.result.author_details.avatar_path.substring(1)
                
            }
        }
        //this obligatoire quand on est pas dans le template
        // this fait reference a component grace au html 
    },
    mounted() { // un peu comme un construct qui est executé a chaque instanciation 
        this.debug()
    }
    ,
    template: '<div><h1>{{result.author}}</h1><img v-bind:src="img_avatar()"><p>{{result.content}}</p><p>{{result.author_details.rating}}</p></div>'
    // 

    // v-bind essentiel pour src
})