const app =Vue.createApp ({
    data () {
        return{
            title: 'The final empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    },
    methods:{
        changeTitle(){
            this.title = 'Words of Radiance'
        }
        changeAuthor:{
            this
        }
    }
})

app.mount('#app')