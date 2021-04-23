const api = {
    base : 'https://api.themoviedb.org/3',
    picLowQual : 'https://image.tmdb.org/t/p/w500//',
    picHighQual : 'https://image.tmdb.org/t/p/original/',
    key : '?api_key=8f560fa0d81bece7dce9718dd0d51a08'
}

const app = Vue.createApp({
    methods: {
        changePage : function(obj){
            let url = '' + obj.page + '.php' + '?id=' + obj.id
            window.location.assign(url)
        }
    }
})

app.component('carrousel-custom',{
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
    template:
        `<div class="carrousel" >
            <carrousel-item @change-page="$emit('changePage',$event)" class="carrousel__item" v-for="result in results" :result="result" :size="size" :key="result.id"></carrousel-item>
        </div>`
})

app.component('carrousel-item',{
    data() {
        return {
            show : false,
            picLowQual : api.picLowQual
        }
    },
    props: ['result','size'],
    computed: {
        classSizeModifObj(){
            return {
                'car_item__img--big': this.size === 'big' ? true : false,
                'car_item__img--medium': this.size === 'medium' ? true : false,
                'car_item__img--small': this.size === 'small' ? true : false
            }
        }
    },
    methods : {
        toggleVisibility(){
            this.show = this.show === true ? false : true;
        },
    },
    template: 
        `<div >
            <img @click="toggleVisibility" class="car_item__img" :class="classSizeModifObj" v-bind:src="picLowQual + result.poster_path" >
            <modal-custom @closeModal="toggleVisibility" @change-page="$emit('changePage',$event)" v-if="show" :result="result"></modal-custom>
        </div>`
})

app.component('modal-custom',{
    data(){
        return {
            picHighQual : api.picHighQual,
            type : '',
            id: this.result.id
        }
    },
    props:['result'],
    computed : {
        img_path(){
            return (this.result.backdrop_path != null) ? this.result.backdrop_path : this.result.poster_path
        }
    },
    methods:{
        titleHandeling(){
            this.type = typeof this.result.title !== 'undefined' ? 'movie' : 'tv'
            this.result.title = typeof this.result.title !== 'undefined' ? this.result.title : this.result.name 
        }
    },
    mounted(){
        this.titleHandeling()
    },
    template: 
        `<div class="modal">
            <button @click="$emit('closeModal')" class="modal__close_btn">X</button>
            <img class="modal__photo" v-bind:src="picHighQual + img_path" >
            <div class="modal__content">
                <h3>{{ result.title }}</h3>
                <p>Overview : {{ result.overview }}</p>
                <p>Vote : {{ result.vote_average }}</p>
                <button @click="$emit('changePage', { page : type, id : id })">More information</button>
            </div>
        </div>`
})

const vm = app.mount('#app')
