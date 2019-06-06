import Vue from 'vue'

export default {
    //load data firebase
    loadData({ commit }) {
        Vue.prototype.$http('data.json').then(resp => {
            const data = resp.data
            if(data) {
                commit('setStocks', data.stocks)
                commit('setPortfolio', {
                    funds: data.funds,
                    stockPortfolio: data.stockPortfolio
                })
            }
        }) // get ajax firebase
    }
}