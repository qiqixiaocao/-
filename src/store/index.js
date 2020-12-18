import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        city: {
            name: '北京',
            id: '_qwqwqwqwqwqwq'
        },
        id: ''
    },
    mutations: {
        changeCity(state, payload) {
            state.city = payload
        }
    }
})

export default store