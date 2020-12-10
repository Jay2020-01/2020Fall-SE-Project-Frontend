import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 存储token
        status: '',
        token: localStorage.getItem('token') || '',
        user: {}
    },

    mutations: {
        auth_request(state) {
            state.status = 'loading'
        },
        auth_success(state, token, user) {
            state.status = 'success'
            state.token = token
            state.user = user
        },
        auth_error(state) {
            state.status = 'error'
        },
        logout(state) {
            state.status = ''
            state.token = ''
        }
    },

    actions: { // 提交更改到vuex的store里面
        login({ commit }, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({ url: 'http://106.13.138.133:18090/user/login', data: user, method: 'POST' })
                    .then(resp => {
                        const token = resp.data.data.token
                        localStorage.setItem('token', token)
                        axios.defaults.headers.common.Authorization = token
                        commit('auth_success', token, user)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error')
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        register({ commit }, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request')
                    // axios({ url: 'http://localhost:8000/ajax/user/register/', data: user, method: 'POST' })
                    //     .then(resp => {
                    //         const token = resp.data.token.token
                    //         const user = resp.data.token.name
                    //         localStorage.setItem('token', token)
                    //         axios.defaults.headers.common.Authorization = token
                    //         commit('auth_success', token, user)
                    //         resolve(resp)
                    //         console.log('success')
                    //         console.log(token)
                    //         console.log(user)
                    //     })
                    //     .catch(err => {
                    //         commit('auth_error', err)
                    //         localStorage.removeItem('token')
                    //         reject(err)
                    //     })
            })
        },
        logout({ commit }) {
            return new Promise((resolve) => {
                commit('logout')
                localStorage.removeItem('token')
                delete axios.defaults.headers.common.Authorization
                resolve()
            })
        }
    },

    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status
    }
})