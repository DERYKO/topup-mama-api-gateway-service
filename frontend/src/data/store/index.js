import Vue from 'vue'
import Vuex from 'vuex'
import api from "../api";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        books: [],
        book: {},
        characters: [],
        comments: [],
        loading: false
    },
    getters: {
        books: state => state.books,
        book: state => state.book,
        characters: state => state.characters,
        comments: state => state.comments,
        loading: state => state.loading
    },
    mutations: {
        setBooks(state, books) {
            state.books = books;
        },
        setBook(state, book) {
            state.book = book;
        },
        setCharacters(state, characters) {
            state.characters = characters;
        },
        setComments(state, comments) {
            state.comments = comments;
        },
        setLoading(state,status){
            state.loading = status;
        }
    },
    actions: {
        async getBooks({commit}, filters) {
            try {
                commit('setLoading', true);
                const {data} = await api.getBooks(filters);
                commit('setBooks', data);
                commit('setLoading', false);
            } catch (e) {
                commit('setLoading', false);
                this._vm.$message.error(e.response.data.message);
            }
        },
        async getBook({commit}, id) {
            try {
                commit('setLoading', true);
                commit('setBook', {});
                const {data} = await api.getBook(id);
                commit('setBook', data);
                commit('setLoading', false);
            } catch (e) {
                commit('setLoading', false);
                this._vm.$message.error(e.response.data.message);
            }
        },
        async getCharacters({commit}, filters) {
            try {
                commit('setLoading', true);
                const {data} = await api.getCharacters(filters);
                commit('setCharacters', data);
                commit('setLoading', false);
            } catch (e) {
                commit('setLoading', false);
                this._vm.$message.error(e.response.data.message);
            }
        },
        async getComments({commit}, filters) {
            try {
                commit('setLoading', true);
                const {data} = await api.getComments(filters);
                commit('setComments', data);
                commit('setLoading', false);
            } catch (e) {
                commit('setLoading', false);
                this._vm.$message.error(e.response.data.message);
            }
        },
        async createComment({commit, dispatch}, payload) {
            try {
                commit('setLoading', true);
                const {data} = await api.createComment(payload);
                dispatch('getComments', {
                    isbn: payload.isbn
                })
                commit('setComments', data);
                commit('setLoading', false);
            } catch (e) {
                commit('setLoading', false);
                this._vm.$message.error(e.response.data.message);
            }
        }
    }
})
