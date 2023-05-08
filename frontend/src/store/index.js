// import vuex
import { createStore } from "vuex";

// import module auth
import auth from './module/auth'

// import module order
import order from './module/order'

// import module order
import category from './module/category'

//import module slider
import slider from './module/slider'

//import module product
import product from './module/product'

//import module cart
import cart from './module/cart'

// create store vuex
export default createStore({
    modules: {
        auth,
        order,
        category,
        slider,
        product,
        cart
    }
})