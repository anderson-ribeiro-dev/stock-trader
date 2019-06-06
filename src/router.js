import Vue from 'vue'
import Router from 'vue-router'

import Home from './componentes/Home.vue'
import Portifolio from './componentes/portifolio/Portifolio.vue'
import Stocks from './componentes/stocks/Stocks.vue'

//register router
Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/portifolio', component: Portifolio },
        { path: '/stocks', component: Stocks },
    ]
})
