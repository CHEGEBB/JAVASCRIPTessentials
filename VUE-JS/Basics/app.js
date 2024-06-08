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
            console.log('You Clicked me')
        }
    }
})

app.mount('#app')