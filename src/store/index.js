import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        myInfo: {}, // 个人信息
    },
    mutations: {
        // 设置用户信息
        SET_MYINFO(state, data) {
            state.myInfo = data;
        },
        // 清除用户信息
        CLEAN_MYINFO(state) {
            localStorage.clear();
            window.vm.$router.push({
                path: '/login'
            });
            // localStorage.removeItem('token');
            state.myInfo = {};
        }
    },
    actions: {},
    modules: {}
})

export default store
