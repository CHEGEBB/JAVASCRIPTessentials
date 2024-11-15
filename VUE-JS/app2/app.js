
const app = Vue.createApp({
    data () {
        return {
            showBooks: true,
            books : [
                {title: 'The Catcher in the Rye', author: 'J.D. Salinger', pages: 276},
                {title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 297},
                {title: '1984', author: 'George Orwell', pages: 328},
            ],
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y: 0,
            
        }
    },
    methods : {
        toggleShowBooks (){
            this.showBooks =!this.showBooks
        },
        handleEvent(e){
            console.log('event', e.type)
        },
        handleMouseMove (e){
            this.x = e.offsetX
            this.y = e.offsetY

        }
    }
})

app.mount('#app')