
const app = Vue.createApp({
    data () {
        return {
            url : 'https://chegebb.github.io/My-portfolio-website/',
            showBooks: true,
            itemName: null,
            itemNumber: null,
            shopppingList : [
                {name: 'Apple', number: 5},
            ],
            books : [
                {title: 'The Catcher in the Rye', author: 'J.D. Salinger', pages: 276, img : './assets/1.jpeg',isFav: true,},
                {title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 297 , img : './assets/2.jpeg',isFav: false,},
                {title: '1984', author: 'George Orwell', pages: 328 , img : './assets/3.jpeg',isFav: true,},
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

        },
        toggleIsFav(book){
            book.isFav =!book.isFav
        }
    }
})

app.mount('#app')