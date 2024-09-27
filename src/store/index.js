import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loading: false,
        isLogin: false,
        userData: [],
        postData: [],
        postDataDetails: {},
    },
    getters: {
        getUserInfoDetail(state) {
            return state.userData.slice(0, 20);
        },
    },
    mutations: {
        setUserData(state, data) {
            state.userData = data;
        },
        setIsLogin(state, payload) {
            state.isLogin = payload;
        },
        setPostData(state, data1) {
            state.postData = data1;
        },
        setPostDetails(state, data1) {
            state.postDataDetails = data1;
        },
        setLoading(state, data1) {
            state.loading = data1;
        },
    },
    actions: {
        async getUserInfo({ commit, state }, payload) {
            const res = await axios(
                "https://jsonplaceholder.typicode.com/photos"
            );
            commit("setUserData", res.data);
            commit("setIsLogin", true);
        },
        async getPostInfo({ commit, state }, payload) {
            const res = await axios(
                "https://jsonplaceholder.typicode.com/todos"
            );
            commit("setPostData", res.data);
        },
        async getPostDetails({ commit, state }, payload) {
            commit("setLoading", true);
            try {
                const res = await axios.get(
                    `https://jsonplaceholder.typicode.com/todos/${payload}`
                );
                commit("setPostDetails", res.data);
                commit("setLoading", false);
            } catch (error) {
                console.log(error);
                commit("setLoading", false);
            }
        },
    },
    modules: {},
});
