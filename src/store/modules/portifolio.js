export default {
    state: {
        funds: 10000, //Account balance
        stocks: []
    },
    mutations: {
        //Purchase order
        buyStock(state, { stockId, quantity, stockPrice }){
            const record  = state.stocks.find(element => element.id == stockId)
            if (record) {
                record.quantity += quantity
            } else {
                state.stocks.push({
                    id: stockId,
                    quantity: quantity
                })
            }
            //Adjust balance
            state.funds -= stockPrice * quantity
        },
        //sales actions 
        sellStock(state, { stockId, quantity, stockPrice }) {
            const record = state.stocks.find(element => element.id == stockId)
            // Amount of shares greater than the sale
            if(record.quantity > quantity) {
                record.quantity -= quantity
            } else {
                state.stocks.splice(state.stocks.indexOf(record), 1) // remove element array
            }
            //adjust balance 
            state.funds += stockPrice * quantity
        },
        setPortfolio(state, portfolio){
            state.funds = portfolio.funds
            state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
        }
    },
    actions: {
        //Sell Stocks
        sellStock({ commit }, order) {
            commit('sellStock', order) // call mutations 
        }
    },
    getters: {
        stockPortfolio(state, getters) {
            //return register complete
            return state.stocks.map(stock => {
                const record = getters.stocks.find(element => element.id == stock.id)
                return {
                    id: stock.id,
                    quantity: stock.quantity,
                    name: record.name,
                    price: record.price
                }
            })
        },
        // Get balances
        funds(state) {
            return state.funds 
        }
    }
}