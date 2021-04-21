const CounterApp = {
    data() {
        return {
            counter : 0,
            counterId : ''
        }
    },
    mounted() {
        this.run()
    },
    methods: {
        toggle(){
            this.counterId === '' ? this.run() : this.stop()
        },
        stop(){
            clearInterval(this.counterId)
            this.counterId= ''
        },
        run(){
            this.counterId = setInterval(() => {
                this.counter++
            },1000)
        },
        isOdd(number){
            return ((number % 2) == 0) ?  false : true
        }
    }
}
Vue.createApp(CounterApp).mount('#app')