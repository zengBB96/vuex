import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [
            {name: 'apple', price: '2'},
            {name: 'banana', price: '3'},
            {name: 'pear', price: '4'},
        ]
    },
    getters: {  //getters获取数据状态
        changeProduct: (state) =>{
            return state.products.map(val =>{
                return {
                    name: val.name,
                    price: val.price *2
                }
            })
            return state.products
        }
    },
    mutations: {  //mutations更改数据状态唯一方法，
        decrePrice(state){
            state.products.forEach(val =>{
                val.price = val.price*2
            })
        }
    },
    actions: {  //actions提交的是mutations，处理的异步操作
        decrePriceAction(context){
            setTimeout(() =>{
                context.commit('decrePrice')
            },0)
        }
    }
})