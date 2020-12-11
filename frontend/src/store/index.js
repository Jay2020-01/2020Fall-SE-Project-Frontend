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
                        if (resp.data.code == 200) {
                            const token = resp.data.data.token
                            const user = resp.data.data.name
                            localStorage.setItem('token', token)
                            axios.defaults.headers.common.Authorization = token
                            commit('auth_success', token, user)
                        } else {
                            commit('auth_error')
                        }
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
                axios({ url: 'http://106.13.138.133:18090/user/register/', data: user, method: 'POST' })
                    .then(resp => {
                        if (resp.data.code == 200) {
                            const token = resp.data.data.token
                            const user = resp.data.data.name
                            localStorage.setItem('token', token)
                            axios.defaults.headers.common.Authorization = token
                            commit('auth_success', token, user)
                            console.log('success')
                            console.log(token)
                            console.log(user)
                        } else {
                            commit('auth_error')
                        }
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error', err)
                        localStorage.removeItem('token')
                        reject(err)
                    })
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