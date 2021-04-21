const api = {
    base : 'https://api.themoviedb.org/3',
    key : '?api_key=8f560fa0d81bece7dce9718dd0d51a08'
}


const app = Vue.createApp({})

app.component('carrousel',{
    data(){
        return {
            results : {}
        }
    },
    props:['size','request','filter'],
    methods: {
        getData : function(){
            let url = api.base + this.request + api.key +this.filter
            fetch(url)
                .then(response=>response.json())
                .then(json=>this.results = json.results)
        }
    },
    mounted(){
        this.getData()
    },
    template:`
        <div class="carrousel">
            <carrousel-item class="carrousel__item" v-for="result in results" v-bind:result="result" :key="result.id"></carrousel-item>
        </div>
    `
})

app.component('carrousel-item',{
    props: ['result'],
    computed: {
        title(){
            return (typeof this.result.title !== 'undefined') ? this.result.title : this.result.name 
        }
    },
    template: `
        <div >
            <img v-bind:src="\'https://image.tmdb.org/t/p/w500//\'+ result.poster_path" >
            <article>
                <h3>{{ title }}</h3>
                <p>{{result.overview}}</p>
            </article>
        </div>`
})

const vm = app.mount('#app')
