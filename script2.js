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
                    // console.log(json.results.length)
                    // var str = ''
                    // for (i = 0; i < result["results"].length; i++) {

                    //     str += data.results[0].author + data.results[0].content + data.results[0].author_details.avatar_path + data.results[0].author_details.rating
                    // }
                    // document.getElementById('#app2').innerHTML = str
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
            return this.result.author_details.avatar_path.substring(1)
            // var test = this.result.author_details.avatar_path.substring(1)
            // if (test != null) {
            //     return test;
            // }
            // else {
            //     return test = 'https://cdn4.buysellads.net/uu/1/87530/1616613724-DO-Display-260-x-200-DO-blue.jpg';
            // }

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