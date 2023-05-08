import { createApp } from 'vue'
import App from './App.vue'

//import router
import router from './router'

// import store vuex
import store from './store'

const app = createApp(App)

//gunakan router di vue js dengan plugin "use"
app.use(router)

// gunakan store di vue js dengan plugin "use"
app.use(store)

// define mixins for global function
app.mixin({

    methods: {

        // Money thousand
        moneyFormat(number) {
            let reverse = number.toString().split('').reverse().join(''),
            thousands = reverse.match(/\d{1,3}/g)
            thousands = thousands.join('.').split('').reverse().join('')
            return thousands
        },

        // calculate discount 
        calculateDiscount(product) {
            return product.price - (product.price *(product.discount)/100)
        }

    }
})

app.mount('#app')