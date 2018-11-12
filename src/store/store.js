import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

function setPrice() {
  return Math.max(Math.floor(Math.random() * 200));
};

export const store = new Vuex.Store({
  state: {
    funds: 10000,
    stocks: [
      {
        title: 'BMW',
        price: setPrice(),
        isBtnDis: true,
      },
      {
        title: 'Google',
        price: setPrice(),
        isBtnDis: true,
      },
      {
        title: 'Apple',
        price: setPrice(),
        isBtnDis: true,
      },
      {
        title: 'Twitter',
        price: setPrice(),
        isBtnDis: true,
      },
    ],
    myStocks: [],
    myQuantity: 0
  },
  getters: {
    getFunds(state) {
      return state.funds.toFixed(2);
    },
    getStocks(state) {
      return state.stocks;
    },
    getMyStocks(state) {
      return state.myStocks;
    }

  },
  mutations: {
    onInput(state, payload) {
      if (payload.value !== '') {
        state.stocks[payload.index].isBtnDis = false;
      } else {
        state.stocks[payload.index].isBtnDis = true;
      }
    },
    onEndDay(state) {
      for(let i = 0; i < state.stocks.length; i++) {
        state.stocks[i].price = setPrice();
      }
      for (let i = 0; i < state.myStocks.length; i++) {
        for (let k = 0; k < state.stocks.length; k++) {
          if (state.myStocks[i].title == state.stocks[k].title) {
            state.myStocks[i].price = state.stocks[k].price;
          }
        }
      }
      
    },
    onBuy(state, payload) {
      let currentValue = state.stocks[payload.index].price * 
                         payload.quantity[payload.index];      
      
      state.funds -= currentValue; 

      console.log(payload);

      if (state.myStocks.length == 0) {
        state.myStocks.push({
          title: state.stocks[payload.index].title,
          quantity: payload.quantity[payload.index],
          price: state.stocks[payload.index].price
        });        
      } else {
        for (let i = 0; i < state.myStocks.length; i++) {
          if(state.myStocks[i].title == state.stocks[payload.index].title) {
            console.log('its a trap? 1');
            state.myStocks[i].title = state.stocks[payload.index].title;
            state.myStocks[i].quantity = +state.myStocks[i].quantity + +payload.quantity[payload.index];
            state.myStocks[i].price = state.stocks[payload.index].price;            
            return;    
          }
        };
        
        state.myStocks.push({
          title: state.stocks[payload.index].title,
          quantity: payload.quantity[payload.index],
          price: state.stocks[payload.index].price
        });
        console.log('its a trap? 2');
      }
    },
    onSell(state, payload) {
      if(payload.quantity > state.myStocks[payload.index].quantity) {
        alert('You dont have these quantity!');
        return;
      }

      let sellValue = state.myStocks[payload.index].price * 
                      payload.quantity;     

      state.funds += sellValue; 
      state.myStocks[payload.index].quantity -= payload.quantity;                  
      
    }
  },
  actions: {
    onInput({commit}, payload) {
      commit('onInput', payload)
    },
    onEndDay({commit}) {
      commit('onEndDay');
    },
    onBuy({commit}, payload) {
      // console.log(payload);
      commit('onBuy', payload);
    },
    onSell({commit}, payload) {
      commit('onSell', payload);
    }
  }
});