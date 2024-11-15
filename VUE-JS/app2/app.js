
const app = Vue.createApp({
    data () {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
            
        }
    },
    methods : {
        toggleShowBooks (){
            this.showBooks =!this.showBooks
        }
    }
})

app.mount('#app')