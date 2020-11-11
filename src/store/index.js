import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoggedIn: localStorage.getItem('token') ? true : false,
        token: localStorage.getItem('token') || '',
        user: JSON.parse(localStorage.getItem('user')) || {}
    },
    getters: {
        isLoggedIn(state){
            return state.isLoggedIn
        },
        getUser(state){
            return state.user
        }
    },
    mutations: {
        setLogin(state,payload){
            state.isLoggedIn = true
            state.token = payload.jwt
            state.user = payload.user
        },
        setLogout(state){
            state.isLoggedIn = false,
            state.token = ''
            state.user = {}
        },
    },
    actions: {
        login(context,payload){
            context.commit('setLogin',payload)
        },
        rememberSession(context,payload){
            localStorage.setItem('token',payload.jwt)
            localStorage.setItem('user',JSON.stringify(payload.user))
        },
        logout(context){
            localStorage.removeItem('token')
            context.commit('setLogout')
        }
    },
    modules: {

    },
})
