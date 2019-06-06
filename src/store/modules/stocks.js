import stocks from '../../data/stocks'

//state, mutations
export default {
    state: {
        stocks: []
    },
    //alter state stocks
    mutations: {
        setStocks(state, stocks) {
            state.stocks = stocks
        },
        randomizeStocks(state){
            state.stocks.forEach(stock => {
                stock.price = Math.round(stock.price * (1 + Math.random() - 0.45)) //high actions
            });
        }
    },
    actions: {
        // destructuring
        buyStock({ commit }, order){
            commit('buyStock', order)
        },
        // start  actions 
        initStocks({ commit }) {
            // eslint-disable-next-line no-console
            // console.log('initStocks...')
            commit('setStocks', stocks) // call mutations 
        },
        randomizeStocks({ commit }) {
            commit('randomizeStocks')
        }
    },
    // actions registered
    getters: {
        stocks(state) {
            return state.stocks
        }
    }
} 